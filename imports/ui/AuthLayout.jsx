import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert , Button, Container, Row, Col } from 'reactstrap'
import { Form, TextBox, PasswordBox, FormField, LinkButton } from 'rc-easyui';
import { Meteor } from 'meteor/meteor';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MainReducer from '../reducers/MainReducer';

import { BrowserRouter, Route  } from 'react-router-dom';
import PageLayout from './PageLayout.jsx';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer);

class AuthLayout extends Component {

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/Login' component={AuthComponent} />
          <Route exact path='/' component={PageLayout} />
        </BrowserRouter>
      </Provider>
    )
  }
}

class AuthComponent extends React.Component {
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
        var thisme = this;
        let user = this.state.user;
        const { history } = this.props;

        // Meteor.call('check_userexist', user, function (error, res) {
        //     if (res) {
        //         document.getElementById('alert_sukses').style.display = 'block';
        //         document.getElementById('alert_danger').style.display = 'none';
        //
        //         // history.push('/');
        //     } else {
        //         document.getElementById('alert_danger').style.display = 'block';
        //     }
        // })
    }

    render() {
      return (
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Form model={this.state.user}>
                  <Alert id="alert_sukses" color="success" style={{ display:'none' }}> <center>Login Sukses</center> </Alert>
                  <Alert id="alert_danger" color="danger" style={{ display:'none' }}> <center>User name dan password tidak sesuai !!</center> </Alert>
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
