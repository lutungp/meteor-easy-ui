import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Methods extends Component {
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

    callmethod(params){
           import Content from './modules/master/user/UserForm.jsx';

           return <Content />;
    }
}

module.exports = Methods;
