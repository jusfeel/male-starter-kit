import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('index');
    },
    update: function() {
      var entrySelected = this.get('model');
      entrySelected.save();
      this.transitionToRoute('index');
    }
  }
});
