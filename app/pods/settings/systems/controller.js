import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let system = this.store.createRecord('system', {
        name: this.get('systemName')
      });
      this.set('systemName',"");
      system.save();
    }
  }
});
