import React, { Component } from 'react';
import { Tabs, TabPanel } from 'rc-easyui';

export default class TabContent extends Component {

  handleAddTab(elem) {
      /* action ketika action menu true */
      if (elem.actionmenu) {
          console.log('action');
      }
  }

  render() {
    return (
        <Tabs scrollable style={{ width: '100%', height: '100%' }} justified>
          <TabPanel title="Tab1" closable bodyStyle={{ padding:'10px' }}>
            <p>Tab Panel1</p>
          </TabPanel>
          <TabPanel title="Tab2" closable>
            <p>Tab Panel2</p>
          </TabPanel>
          <TabPanel title="Tab3" closable>
            <p>Tab Panel3</p>
          </TabPanel>
          <TabPanel title="Help" closable iconCls="icon-help">
            <p>This is the help content.</p>
          </TabPanel>
        </Tabs>
    );
  }
}
