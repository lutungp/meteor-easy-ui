import React, { Component } from 'react';
import { Tabs, TabPanel } from 'rc-easyui';

class TabContent extends Component {

  constructor(props){
    super(props);
  }


  handleAddTab(elem) {
      /* action ketika action menu true */
      
  }

  render() {
    return (
        <Tabs id="tt" scrollable style={{ width: '100%', height: '100%' }} justified>
          <TabPanel title="Dashboard" bodyStyle={{ padding:'10px' }}>
            <p>Dashboard</p>
          </TabPanel>
        </Tabs>
    );
  }
}

module.exports = TabContent;
