import Component from '@ember/component';

export default Component.extend({
  tagName: 'main-nav',

  classNameBindings: ['menuIsOpened:active'],

  menuIsOpened: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('menuIsOpened')
      $('.menu-panel').toggleClass('active')
    }
  }
});
