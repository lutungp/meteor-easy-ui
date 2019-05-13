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
           import { Form, FormField, TextBox } from 'rc-easyui';

           //...
           const { user, heroes } = this.state;
           return (
             <div>
                 <h2>Basic Form</h2>
                 <Form
                   style={{ maxWidth: 500 }}
                   model={user}
                   labelWidth={120}
                   labelAlign="right"
                 >
                     <FormField name="name" label="Name:">
                        <TextBox></TextBox>
                     </FormField>
                 </Form>
             </div>
           );

    }
}

module.exports = Methods;
