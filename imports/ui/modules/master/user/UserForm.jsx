
import React, { Component } from 'react';
import { Form, FormField, TextBox, CheckBox, ComboBox, LinkButton } from 'rc-easyui';
import { render } from 'react-dom';
import { M_user } from '../../../../api/models.js';
import { Meteor } from 'meteor/meteor';

class UserForm extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          user: {}
      }

    }

    styleBtn(){
      return {margin:'0 2px'}
    }

    handleSubmit() {
        Meteor.call('user_insert', function (error, res) {
            console.log(res);
        });
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
