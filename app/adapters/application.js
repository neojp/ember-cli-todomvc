import DS from 'ember-data';

var ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});

export default ApplicationAdapter;