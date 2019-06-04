import React from 'react';
import { Meteor } from 'meteor/meteor';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker'

import 'rc-easyui/dist/themes/icon.css';
import 'rc-easyui/dist/themes/bootstrap/easyui.css';
import 'rc-easyui/dist/themes/react.css';
import 'rc-easyui/dist/rc-easyui-min.js';

import {onAuthChange, routes} from "../imports/routes/routes";

Tracker.autorun(function(){
    const authenticated = Session.get('name');
    onAuthChange(authenticated);
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('render-target'));
});
