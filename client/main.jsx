import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import 'rc-easyui/dist/themes/icon.css';
import 'rc-easyui/dist/themes/bootstrap/easyui.css';
import 'rc-easyui/dist/themes/react.css';
import 'rc-easyui/dist/rc-easyui-min.js';

import PageLayout from '../imports/ui/PageLayout.jsx';

Meteor.startup(() => {
  render(<PageLayout />, document.getElementById('render-target'));
});
