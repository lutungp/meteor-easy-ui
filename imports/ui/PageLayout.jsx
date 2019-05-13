import React, { Component } from 'react';
import { Layout, LayoutPanel, TextBox, Tree } from 'rc-easyui';
import { Tabs, TabPanel } from 'rc-easyui';
import { render } from 'react-dom';
import methods from '../Methods.js';
var Methods = new methods();
class PageLayout extends Component {

  constructor() {
    super();
    this.state = {
      data: this.getData(),
      dataTab :  []
    }
    this.renderTabContent = this.renderTabContent.bind(this)
  }

  renderTabContent(content/*, index*/) {
      // console.log('render');

      return content;
  }

  getData() {
    return [
      {
        id: 1,
        text: "Adminsitrator",
        state: "closed",
        children: [
          {
            id: 11,
            text: "Master",
            state: "closed",
            children: [
              {
                id: 111,
                actionmenu : true,
                text: "Master User 1",
                available : 'true',
                url : 'master/user/UserForm'
              },
              {
                id: 112,
                actionmenu : true,
                text: "Master User 2",
                available : 'true',
                url : 'master/user/UserForm'
              }
            ]
          }
        ]
      }
    ];
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

  getTabIndex(title){
    for(let i=0; i<this.state.dataTab.length; i++){
      if (this.state.dataTab[i].title == title){
        return i;
      }
    }

    return -1;
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
