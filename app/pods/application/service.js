import $ from 'jquery';
import { assign } from '@ember/polyfills';
import { observer } from '@ember/object';

export default Service.extend({
  currentPath: null,
  templateName: null,

  templateNameWatcher: observer('templateName', function() {
    const options = this.get('options');
    const properties = assign({}, options.defaults, options[this.get('templateName')]);
    this.setProperties(properties);
  }),

  updateCurrentPath() {
    if (window.location) {
      this.set('currentPath', window.location.pathname);
    }
  }
});
