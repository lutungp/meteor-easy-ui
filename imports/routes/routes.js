import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import AuthLayout from '../ui/AuthLayout.jsx';
import PageLayout from '../ui/PageLayout.jsx';

const history = createBrowserHistory();

export const routes = (
      <Router history = {history}>
        <Switch>
          <Route exact path='/' component= {PageLayout}/>
          <Route exact path='/Login' component={AuthLayout}/>
        </Switch>
      </Router>
);

export const onAuthChange = function (authenticated) {
    if (!authenticated) {
        history.replace('/Login');
    } else {
        history.replace('/');
    }
};
