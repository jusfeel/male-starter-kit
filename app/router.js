import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('features');
  this.route('index', {path: "/"});
  this.route('user', {path: "user/:user_id"});

  this.route('entry', function() {
    this.route('show', {path: ":entry_id"});
  });
  this.route('search');
  this.route('about');

  this.route('settings', function() {
    this.route('countries');
    this.route('country', function() {
      this.route('show', {path: ":country_id"});
    });
  });
});

export default Router;
