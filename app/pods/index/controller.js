import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var entry = this.store.createRecord('entry', {
        title: this.get('title'),
        url: this.get('url'),
        description: this.get('description'),
        keywords: this.get('keywords'),
        system: this.get('system'),
        country: this.get('country')
      });
      this.set('title',"");
      this.set('url',"");
      this.set('description',"");
      this.set('keywords',"");
      this.set('system',"");
      this.set('country',"");
      entry.save();
    }
  }
});
