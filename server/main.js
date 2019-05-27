import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import S_menus from '/imports/api/setup_template';
import { M_user } from '/imports/api/models.js';

Meteor.methods({

  get_Smenu: function () {
     return S_menus.find().fetch();
  },

  user_list : function (data) {
      return M_user.find().fetch();
  },

  user_insert : function (data) {
      return M_user.insert(data)
  },

  user_gridload : function () {
      Meteor.call('foo')
  }

});
