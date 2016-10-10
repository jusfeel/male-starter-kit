import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function() {
    return RSVP.hash({
      entries: this.get('store').findAll('entry'),
      countries: this.get('store').findAll('country'),
      systems: this.get('store').findAll('system')
    });
  }
});
