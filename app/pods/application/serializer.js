import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  keyForRelationship: function(key, relationship, method) {
     if(relationship === "belongsTo") {
     	return Ember.String.underscore(key) + '_id';
     }
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    return this._super(...arguments);
  }
});
