import React, { Component } from 'react';
import { Layout, LayoutPanel, TextBox, Tree } from 'rc-easyui';
import { Tabs, TabPanel } from 'rc-easyui';
import { render } from 'react-dom';


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
                text: "Friend"
              },
              {
                id: 112,
                actionmenu : true,
                text: "Wife"
              },
              {
                id: 113,
                actionmenu : true,
                text: "Company"
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
                text: "Intel"
              },
              {
                id: 122,
                actionmenu : true,
                text: "Java"
              },
              {
                id: 123,
                actionmenu : true,
                text: "Microsoft Office"
              },
              {
                id: 124,
                actionmenu : true,
                text: "Games"
              }
            ]
          },
          {
            id: 13,
            actionmenu : true,
            text: "index.html"
          },
          {
            id: 14,
            actionmenu : true,
            text: "about.html"
          },
          {
            id: 15,
            actionmenu : true,
            text: "welcome.html"
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
          if (!this.state.dataTab.some(dataTab => elem.text === dataTab.title)) {
              /* check if exist cannot add new TabPanel */
              dataTab.push({
                title: elem.text,
                content: 'new content'
              })

              this.setState({dataTab:dataTab})
          }
      }
  }

  tabpanelClose(elem) {
      let filteredArray = this.state.dataTab.filter(dataTab => dataTab.title !== elem.props.title)
      this.setState({dataTab: filteredArray});
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
        <Tabs id="tabpanel" scrollable style={{ width: '100%', height: '100%' }} onTabClose={this.tabpanelClose.bind(this)}>
        {
          this.state.dataTab.map((tab, index) => (
            <TabPanel key={index} {...tab} closable> {tab.content} </TabPanel>
          ))
        }
        </Tabs>
      </Layout>
    );
  }
}

export default PageLayout;
