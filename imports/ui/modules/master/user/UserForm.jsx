
import React, { Component } from 'react';
import { Form, FormField, TextBox, CheckBox, ComboBox, LinkButton } from 'rc-easyui';
import { render } from 'react-dom';

import { Meteor } from 'meteor/meteor';

class UserForm extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          user: {
              user_name      : null,
              user_password  : null,
              user_alamat    : null,
              user_phone     : null
          }
      }

    }

    styleBtn(){
      return {margin:'0 2px'}
    }

    handleSubmit() {
        var data_insert = this.state.user;
        Meteor.call('user_insert', data_insert, function (error, res) {
            if (res) {
                console.log('success');
            } else {
                console.log('failed');
            }
        });
    }

    handleChange(name, value) {
        let user = Object.assign({}, this.state.user);
        user[name] = value;
        this.setState({ user: user })
    }

    render() {
      const { user } = this.state;
      return (
        <div>
            <div><br/><br/></div>
            <Form
              style={{ maxWidth: 500 }}
              model={user}
              labelWidth={100}
              labelAlign="right"
              onChange={this.handleChange.bind(this)}
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
                  <LinkButton iconCls="icon-save" style={this.styleBtn()} onClick={this.handleSubmit.bind(this)}>Save</LinkButton>
                </div>
            </Form>
        </div>
      );
    }
}


export default UserForm;
