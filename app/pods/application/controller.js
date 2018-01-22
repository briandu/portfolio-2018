import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  applicationController: Ember.inject.controller('application'),

  pageClasses: computed(function(){
    return this.get('applicationController.currentPath');
  })
});
