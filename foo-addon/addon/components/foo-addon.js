import Ember from 'ember';
import layout from '../templates/components/foo-addon';

export default Ember.Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);

    console.log('test');
  },
});
