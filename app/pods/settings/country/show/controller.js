import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('settings.countries');
    },
    update: function() {
      var itemSelected = this.get('model');
      itemSelected.save();
      this.transitionToRoute('settings.countries');
    }
  }
});
