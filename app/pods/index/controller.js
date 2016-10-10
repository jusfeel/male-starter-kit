import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      const entry = this.store.createRecord('entry', {
        title: this.get('title'),
        url: this.get('url'),
        description: this.get('description'),
        keywords: this.get('keywords'),
        system: this.store.peekRecord('system', this.get('system')),
        country: this.store.peekRecord('country', this.get('country'))
      });
      this.set('title',"");
      this.set('url',"");
      this.set('description',"");
      this.set('keywords',"");
      entry.save();
    }
  }
});
