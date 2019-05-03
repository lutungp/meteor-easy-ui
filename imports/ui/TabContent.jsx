import React, { Component } from 'react';
import { Tabs, TabPanel } from 'rc-easyui';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime';

var data = [];
class TabContent extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: [
          {
            title: 'Tab1',
            content: 'Content1'
          },{
            title: 'Tab2',
            content: 'Content2'
          },{
            title: 'Tab3',
            content: 'Content3'
          }
        ]
    };
  }


  handleAddTab(){
    let data = this.state.data.slice();
    data.push({
      title: 'new title',
      content: 'new content'
    })
    this.setState({data:data})
  }

  render() {
    return (
        <Tabs id="tabpanel" scrollable style={{ width: '100%', height: '100%' }}>
        {
          this.state.data.map((tab,index) => (
            <TabPanel key={index} {...tab} closable>...</TabPanel>
          ))
        }
        </Tabs>
    );
  }
}

module.exports = TabContent;
