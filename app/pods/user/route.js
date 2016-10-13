import Ember from 'ember';
import RSVP from 'rsvp';
import Users from './users';

export default Ember.Route.extend({
  model(params) {
    const userId = params.user_id;
    if(userId === "wanghao") {
      let userdata = Users.filter( (u) => u.name === userId )[0];
      userdata.id = 0;
      this.store.createRecord('user', userdata);
      return RSVP.hash({
        entries: this.get('store').findAll('entry'),
        countries: this.get('store').findAll('country'),
        systems: this.get('store').findAll('system')
      });
    }else if(userId === "secret") {
      this.transitionTo('index');
    }else{
      this.transitionTo('about');
    }
  },

  afterModel: function() {
    this.transitionTo('search');
  }
});
