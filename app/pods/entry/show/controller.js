import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      this.get('model.entry').deleteRecord();
      this.get('model.entry').save();
      this.transitionToRoute('index');
    },
    update: function() {
      const entrySelected = this.get('model.entry');
      entrySelected.save().then(() => {
        this.transitionToRoute('index');
      }, function() {
        // Error callback
      });
    }
  }
});
