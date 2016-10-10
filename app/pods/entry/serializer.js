import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    country: { embedded: 'always' },
    system: { embedded: 'always' }
  },
  primaryKey: '_id'
});
