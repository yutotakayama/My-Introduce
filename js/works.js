'use strict';

{
  window.addEventListener('load', look, false);
  function look() {
    let textWrapper = document.querySelector('#look .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '#look .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
      }).add({
        targets: '#look',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }

  window.addEventListener('load',unfinished,false);
  function unfinished() {
    let textWrapper = document.querySelector('#uc');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '#uc .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      }).add({
        targets: '#uc .letter',
        translateY: [0,-100],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      });
  }

}