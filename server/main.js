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

  user_insert : function (data, action) {
      if (action == 'Add') {
          return M_user.insert(data)
      } else {

      }
  },

  user_delete : function (_id) {
      return M_user.remove(_id);
  },

  user_gridload : function () {
      Meteor.call('foo')
  },

  user_gridload : function (id) {
      S_menus.remove({ _id:id });
  },

  check_userexist : function (data) {
      console.log(data);
  }

});
