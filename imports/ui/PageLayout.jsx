import React, { Component } from 'react';
import { Layout, LayoutPanel, TextBox, Tree } from 'rc-easyui';
import { Tabs, TabPanel } from 'rc-easyui';
import { render } from 'react-dom';
import update from 'react-addons-update'; // ES6
import Iframe from 'react-iframe'

class PageLayout extends Component {

  constructor() {
    super();
    this.state = {
      data: this.getData(),
      dataTab :  []
    }

  }

  renderTabContent() {
    return <TabContent/>
  }

  getData() {
    return [
      {
        id: 1,
        text: "My Documents",
        state: "closed",
        children: [
          {
            id: 11,
            text: "Photos",
            state: "closed",
            children: [
              {
                id: 111,
                actionmenu : true,
                text: "Friend",
                available : 'true'
              },
              {
                id: 112,
                actionmenu : true,
                text: "Wife",
                available : 'true'
              },
              {
                id: 113,
                actionmenu : true,
                text: "Company",
                available : 'true'
              }
            ]
          },
          {
            id: 12,
            text: "Program Files",
            state: "closed",
            children: [
              {
                id: 121,
                actionmenu : true,
                text: "Intel",
                available : 'true'
              },
              {
                id: 122,
                actionmenu : true,
                text: "Java",
                available : 'true'
              },
              {
                id: 123,
                actionmenu : true,
                text: "Microsoft Office"
              },
              {
                id: 124,
                actionmenu : true,
                text: "Games",
                available : 'true'
              }
            ]
          },
          {
            id: 13,
            actionmenu : true,
            text: "index.html",
            available : 'true'
          },
          {
            id: 14,
            actionmenu : true,
            text: "about.html",
            available : 'true'
          },
          {
            id: 15,
            actionmenu : true,
            text: "welcome.html",
            available : 'true'
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
                dataTab.push({
                  title: elem.text,
                  content: '<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"\
                       width="450px"\
                       height="450px"\
                       id="myId"\
                       className="myClassname"\
                       display="initial"\
                       position="relative"/>',
                  available : 'true'
                })

                this.setState({dataTab:dataTab})
                setTimeout(() => this.selectedIndex = this.state.dataTab.length-1);
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
               <TabPanel key={index} {...tab} closable ref={"tabpanel" + index}>{tab.content}</TabPanel>
          ))
        }
        </Tabs>
      </Layout>
    );
  }
}

export default PageLayout;
