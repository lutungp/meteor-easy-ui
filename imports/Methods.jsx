import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Methods extends Component {
    constructor(props){
        super(props);
    }

    callmethod(params){
        switch (params) {
          case 'Master User':
            import Content from './ui/modules/master/user/UserForm.jsx';

            return <Content />
            break;
          default:

        }
    }
}

module.exports = Methods;
