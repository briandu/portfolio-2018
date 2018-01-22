import Controller from '@ember/controller';
import { schedule } from '@ember/runloop';
import { TweenMax, easing } from 'gsap';

export default Controller.extend({
  init: function () {
    this._super();
    schedule('afterRender', this, function() {
      this.runTween();
    });
  },

  runTween() {
    TweenMax.staggerFromTo("h1", .8, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1 }, .1);
    TweenMax.from("hr", 1, { x: -100, delay: .2, ease: Expo.easeOut });
    TweenMax.from(".video-wrapper", 1.2, { width: 0, ease: Expo.easeOut });
    TweenMax.from("p", 1.5, { yPercent: '100%', delay: .3, ease: Expo.easeOut });
  }
});
