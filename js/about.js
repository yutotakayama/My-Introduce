'use strict';

{
  // アニメーション about
  window.addEventListener('load', about, false);
  function about() {
    let aboutTitle = {};
    aboutTitle.opacityIn = [0,1];
    aboutTitle.scaleIn = [0.2, 1];
    aboutTitle.scaleOut = 3;
    aboutTitle.durationIn = 800;
    aboutTitle.durationOut = 600;
    aboutTitle.delay = 500;

    anime.timeline({loop: true})
      .add({
        targets: '#about_title .letters-1',
        opacity: aboutTitle.opacityIn,
        scale: aboutTitle.scaleIn,
        duration: aboutTitle.durationIn
      }).add({
        targets: '#about_title .letters-1',
        opacity: 0,
        scale: aboutTitle.scaleOut,
        duration: aboutTitle.durationOut,
        easing: "easeInExpo",
        delay: aboutTitle.delay
      }).add({
        targets: '#about_title .letters-2',
        opacity: aboutTitle.opacityIn,
        scale: aboutTitle.scaleIn,
        duration: aboutTitle.durationIn
      }).add({
        targets: '#about_title .letters-2',
        opacity: 0,
        scale: aboutTitle.scaleOut,
        duration: aboutTitle.durationOut,
        easing: "easeInExpo",
        delay: aboutTitle.delay
      }).add({
        targets: '#about_title .letters-3',
        opacity: aboutTitle.opacityIn,
        scale: aboutTitle.scaleIn,
        duration: aboutTitle.durationIn
      }).add({
        targets: '#about_title .letters-3',
        opacity: 0,
        scale: aboutTitle.scaleOut,
        duration: aboutTitle.durationOut,
        easing: "easeInExpo",
        delay: aboutTitle.delay
      }).add({
        targets: '#about_title',
        opacity: 0,
        duration: 500,
        delay: 500
      });
  }

    // スライダー
    document.addEventListener('DOMContentLoaded', () => {
      const slide = new Slider('.swiper-container');
    });

    class Slider {
      constructor(el) {
        this.el = el;
        this.swiper = this._Swiper();
      }

      _Swiper() {
        return new Swiper(this.el, {
          loop: true,
          grabCursor: true,
          effect: 'coverflow',
          centeredSlides: true,
          slidesPerView: 1,
          speed: 1000,
          breakpoints: {
            560: {
              slidesPerView: 2,
            }
          },
          autoplay: {
            delay: 1000,
            disableOnInteraction: false
          }
        });
      }
    }
 

    // ページトップへ戻る
    scrollTop('reply', 500);

    function scrollTop(elem,duration) {
      let target = document.getElementById(elem);
      target.addEventListener('click', () => {
        let currentY = window.pageYOffset; 
        let step = duration/currentY > 1 ? 10 : 100;
        let timeStep = duration/currentY * step;
        let intervalID = setInterval(scrollUp, timeStep);

        function scrollUp(){
          currentY = window.pageYOffset;
          if(currentY === 0) {
              clearInterval(intervalID);
          } else {
              scrollBy( 0, -step );
          }
        }
      });
    }

}