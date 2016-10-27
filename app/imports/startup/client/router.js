import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/available-now', {
  name: 'Available_Now_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Available_Now_Page' });
  },
});

FlowRouter.route('/top-picks', {
  name: 'Top_Picks_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Top_Picks_Page' });
  },
});

FlowRouter.route('/vendors', {
  name: 'Vendors_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Vendors_Page' });
  },
});

FlowRouter.route('/diners', {
  name: 'Diners_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Diners_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
