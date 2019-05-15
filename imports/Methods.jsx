import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Methods extends Component {
    constructor(props){
        super(props);
    }

    callmethod(params){
           import Content from './modules/master/user/UserForm.jsx';

           return <Content />;
    }
}

module.exports = Methods;
