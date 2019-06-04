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
    const authenticated = Session.equals('name', true);
    onAuthChange(authenticated);
});
// import PageLayout from '../imports/ui/PageLayout.jsx';
Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('render-target'));
});

// Tracker.autorun((computation) => {
//     if (Session.equals('name', true)) {
//         import PageLayout from '../imports/ui/PageLayout.jsx';
//         Meteor.startup(() => {
//             render(<PageLayout />, document.getElementById('render-target'));
//         });
//     } else {
//         import AuthLayout from '../imports/ui/AuthLayout.jsx';
//         Meteor.startup(() => {
//             render(<AuthLayout />, document.getElementById('render-target'));
//         });
//     }
//
// });
