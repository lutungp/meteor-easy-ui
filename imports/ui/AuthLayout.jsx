import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'reactstrap'
import { Form, TextBox, PasswordBox, FormField, LinkButton } from 'rc-easyui';
import { Meteor } from 'meteor/meteor';

class AuthLayout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: {
          username: null,
          password: null
        }
      }
    }

    handleSubmit(elem) {
        let user = this.state.user;
        Meteor.call('check_userexist', user)
    }

    render() {
      return (
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Form model={this.state.user}>
                  <div style={{ marginBottom: 20 }}>
                    <TextBox className="TextBox-Auth" name="username" value={this.state.user.username} placeholder="Username" iconCls="icon-man" style={{ width: '25em', height: '34px' }}></TextBox>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <PasswordBox className="TextBox-Auth" name="password" value={this.state.user.password} placeholder="Password" iconCls="icon-lock" style={{ width: '25em' }}></PasswordBox>
                  </div>
                  <FormField>
                    <Button color="primary" size="lg" onClick={this.handleSubmit.bind(this)}>Log In</Button>
                  </FormField>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
}

export default AuthLayout;
