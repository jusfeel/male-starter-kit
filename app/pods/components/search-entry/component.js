import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    search(keyword) {
      const user = this.get('store').peekRecord('user', 0);
      const territory = user.get('territory');
      console.log(territory);
      if(!keyword) {
        this.set('entries', null);
        return;
      }
      const entries = this.get('store').peekAll('entry');
      this.set("entries", entries.filter(function(e) {
          // all entries or entries within user's territory
          const countryCode = e.get('country').get('code');
          const cond1 = territory === "ALL" || territory.indexOf(countryCode) !== -1;
          const cond2 = new RegExp(keyword, 'i').test(e.get('keywords'));
          return cond1 && cond2;
      }));
    }
  }
});
