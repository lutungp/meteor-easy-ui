import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import S_menus from '/imports/api/setup_template';

Meteor.methods({

  get_Smenu: function () {
     return S_menus.find().fetch();
  },

  user_insert : function () {
      return 'jos';
  }

});
