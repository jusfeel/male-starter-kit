import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    const userId = params.user_id;
    if(userId !== "secret" && userId == "wanghao") {
      return RSVP.hash({
        entries: this.get('store').findAll('entry'),
        countries: this.get('store').findAll('country'),
        systems: this.get('store').findAll('system')
      });
    }else if(userId === "admin") {
      this.transitionTo('index');
    }else{
      this.transitionTo('about');
    }
  },

  afterModel: function(posts, transtion) {
    this.transitionTo('search');
  }
});
