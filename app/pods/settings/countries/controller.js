import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let country = this.store.createRecord('country', {
        code: this.get('countryCode'),
        name: this.get('countryName')
      });
      this.set('countryCode',"");
      this.set('countryName',"");
      country.save();
    }
  }
});
