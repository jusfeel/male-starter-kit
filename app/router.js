import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('features');
  this.route('index', {path: "/"});

  this.route('entry', function() {
    this.route('show', {path: ":entry_id"});
  });
});

export default Router;
