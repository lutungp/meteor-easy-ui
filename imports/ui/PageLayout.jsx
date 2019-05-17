import React, { Component } from 'react';
import { Layout, LayoutPanel, TextBox, Tree } from 'rc-easyui';
import { Tabs, TabPanel } from 'rc-easyui';
import { render } from 'react-dom';
import methods from '../Methods';

import { S_menus } from '../api/setup_template.js';

var Methods = new methods();
class PageLayout extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      dataTab :  []
    }

    this.getData(),
    this.renderTabContent = this.renderTabContent.bind(this)

  }

  renderTabContent(content) {

      return content;
  }

  getData() {
    var thisme = this;
    Meteor.call('get_Smenu', function (error, resultMenu) {
          let dataMenu = thisme.state.data.slice();
          resultMenu.forEach(function (data) {

              if (data.menu_level == 0) {
                  var ChildLv1 = [];
                  resultMenu.forEach(function (dataLv1) {

                      var ChildLv2 = [];
                      resultMenu.forEach(function (dataLv2) {
                          if (dataLv2.menu_level == 2 && dataLv2.menu_parent == dataLv1._id) {
                              var dataChildLv2 = {
                                  id: dataLv2._id,
                                  actionmenu : true,
                                  text: dataLv2.menu_tittle,
                                  url : dataLv2.menu_url,
                                  available : 'true'
                              }

                              ChildLv2.push(dataChildLv2)
                          }
                      })


                      if (dataLv1.menu_level == 1 && dataLv1.menu_parent == data._id) {
                          var actionmenu = false;
                          if (ChildLv2.length == 0) {
                              actionmenu = true;
                          }

                          var dataChildLv1 = {
                              id: dataLv1._id,
                              actionmenu : actionmenu,
                              text: dataLv1.menu_tittle,
                              available : 'true',
                              state: "closed",
                              url : dataLv1.menu_url,
                              children : ChildLv2
                          }

                          ChildLv1.push(dataChildLv1)
                      }
                  })


                  dataMenu.push({
                      id: data._id,
                      actionmenu : false,
                      text: data.menu_tittle,
                      available : 'true',
                      state: "closed",
                      url : data.menu_url,
                      children : ChildLv1
                  })

                  thisme.setState({data:dataMenu})
              }
          })
    });
  }

  handleSearch(value) {
    this.tree.doFilter(value)
  }
  handleSelectionChange(elem) {

      /* action ketika action menu true */
      if (elem.actionmenu) {
          let dataTab = this.state.dataTab.slice();
          if (!this.state.dataTab.some(dataTab => elem.text === dataTab.title && dataTab.available === 'true' )) {
                /* check if exist cannot add new TabPanel */
                var params = elem.url;
                var Content = Methods.callmethod(params);
                dataTab.push({
                  title: elem.text,
                  url : elem.url,
                  available : 'true',
                  content : Content
                })

                var index = (this.state.dataTab.length);
                // this.renderTabContent(Content, index);
                this.setState({dataTab:dataTab})

                setTimeout(() => this.selectedIndex = this.state.dataTab.length);
          }
      }
  }

  tabpanelClose(elem) {
      const { data, dataTab } = this.state;
      for (var i = 0; i < dataTab.length; i++) {
          if (dataTab[i].title == elem.props.title && dataTab[i].available == 'true') {
              this.state.dataTab[i].available = 'false';
              this.forceUpdate();
          }
      }
  }

  render() {
    const { data } = this.state;
    const me = this;
    return (
      <Layout style={{ width: '100%', height: '100%' }}>
        <LayoutPanel
          style={{ minWidth: 200, maxWidth: 300, height: '100%' }}
          bodyStyle={{ padding: '10px' }}
          split
          region="west"
        >
          <TextBox style={{ marginBottom: '10px', width: '100%' }}
            placeholder="Searching..."
            onChange={this.handleSearch.bind(this)}
          />
          <Tree data={data} ref={ref => this.tree = ref} onSelectionChange={this.handleSelectionChange.bind(this)}></Tree>
        </LayoutPanel>
        <Tabs scrollable style={{ width: '100%', height: '100%' }} onTabClose={this.tabpanelClose.bind(this)}>
        {
          this.state.dataTab.map((tab, index) => (
               <TabPanel key={index} {...tab} closable ref={"tabpanel" + index}>
                  {this.renderTabContent(tab.content)}
               </TabPanel>
          ))
        }
        </Tabs>
      </Layout>
    );
  }
}

export default PageLayout;
