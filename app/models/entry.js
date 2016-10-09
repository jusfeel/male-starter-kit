import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  description: DS.attr('string'),
  keywords: DS.attr('string'),
  system: DS.attr('string'),
  country: DS.belongsTo('country', { async: false })
});
