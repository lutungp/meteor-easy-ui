import React from 'react';
import { Tabs, TabPanel } from 'rc-easyui';

class TabContent extends React.Component {
  render() {
    return (
        <Tabs  style={{ width: '100%', height: '100%' }}>
          <TabPanel title="Tab1">
            <p>Tab Panel1</p>
          </TabPanel>
          <TabPanel title="Tab2">
            <p>Tab Panel2</p>
          </TabPanel>
          <TabPanel title="Tab3">
            <p>Tab Panel3</p>
          </TabPanel>
          <TabPanel title="Help" closable iconCls="icon-help">
            <p>This is the help content.</p>
          </TabPanel>
        </Tabs>
    );
  }
}

export default TabContent;
