import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000',
  headers: {"Content-Type":"application/json"}
});
