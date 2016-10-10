import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function(params) {
    return RSVP.hash({
      entry: this.get('store').find('entry', params.entry_id),
      countries: this.get('store').findAll('country'),
      systems: this.get('store').findAll('system')
    });
  }
});
