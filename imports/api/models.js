import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

const M_user = new Mongo.Collection('m_user');

export { M_user };
