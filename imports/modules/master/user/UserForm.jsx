
import React, { Component } from 'react';
import { Form, FormField, TextBox, CheckBox, ComboBox, LinkButton } from 'rc-easyui';
import { render } from 'react-dom';

class UserForm extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          user: {
              name: null,
              email: null,
              hero: null,
              accept: true
          },
          heroes: [
              { value: 11, text: "Mr. Nice" },
              { value: 12, text: "Narco" },
              { value: 13, text: "Bombasto" },
              { value: 14, text: "Celeritas" },
              { value: 15, text: "Magneta" },
              { value: 16, text: "RubberMan" },
              { value: 17, text: "Dynama" },
              { value: 18, text: "Dr IQ" },
              { value: 19, text: "Magma" },
              { value: 20, text: "Tornado" }
          ]
      }

    }

    styleBtn(){
      return {margin:'0 2px'}
    }

    handleSubmit() {
      console.log('submit');
    }


    render() {
      const { user, heroes } = this.state;
      return (
        <div>
            <div><br/><br/></div>
            <Form
              style={{ maxWidth: 500 }}
              model={user}
              labelWidth={100}
              labelAlign="right"
            >
                <FormField name="user_name" label="Name:">
                   <TextBox></TextBox>
                </FormField>
                <FormField name="user_password" label="Password:">
                   <TextBox></TextBox>
                </FormField>
                <FormField name="user_alamat" label="Alamat:">
                   <TextBox></TextBox>
                </FormField>
                <FormField name="user_phone" label="Telepon:">
                   <TextBox></TextBox>
                </FormField>
                <div style={{marginBottom:'20px', float : 'right'}}>
                  <LinkButton iconCls="icon-cancel" disabled style={this.styleBtn()}>Close</LinkButton>
                  <LinkButton iconCls="icon-save" style={this.styleBtn()}>Save</LinkButton>
                </div>
            </Form>
        </div>
      );
    }
}


export default UserForm;
