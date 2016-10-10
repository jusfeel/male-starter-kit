import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    search(keyword) {
      if(!keyword) {
        this.set('entries', null);
        return;
      }
      const entries = this.get('store').peekAll('entry');
      this.set("entries", entries.filter(function(e) {
          return new RegExp(keyword, 'i').test(e.get('keywords'));
      }));
    }
  }
});
