import React, { Component } from 'react';
import { Layout, LayoutPanel, TextBox, Tree } from 'rc-easyui';

import TabContent from './TabContent.jsx';

class Sidebar extends Component {

  constructor() {
    super();
    this.state = {
      data: this.getData()
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
          console.log('hi');
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
        {this.renderTabContent()}
      </Layout>
    );
  }
}

export default Sidebar;
