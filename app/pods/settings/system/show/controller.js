import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('settings.systems');
    },
    update: function() {
      const itemSelected = this.get('model');
      itemSelected.save();
      this.transitionToRoute('settings.systems');
    }
  }
});
