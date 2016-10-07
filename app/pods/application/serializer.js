import DS from 'ember-data';

//MongoDB works with REST, not JSONAPI
export default DS.RESTSerializer.extend({
  primaryKey: '_id'
});
