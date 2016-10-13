import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      this.get('model').deleteRecord();
      this.get('model').save().then(() => {
       this.transitionToRoute('settings.countries');
      });
    },
    update: function() {
      const itemSelected = this.get('model');
      itemSelected.save().then( () => {
        this.transitionToRoute('settings.countries');
      }).catch((reason) => {
	console.log(reason);
      });
    }
  }
});
