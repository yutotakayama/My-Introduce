'use strict';

{
  // アニメーション about
  window.addEventListener('load', about, false);
  function about() {
    let textWrapper = document.querySelector('#at');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '#at .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      }).add({
        targets: '#at',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  
  }

  // アニメーション works
  window.addEventListener('load', works, false);
  function works() {
    let textWrapper = document.querySelector('#wt');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '#wt .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 1250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '#wt',
        opacity: 0,
        duration: 1250,
        easing: "easeOutExpo",
        delay: 150
      });
  }

  // アニメーション address
  window.addEventListener('load', address, false);
  function address() {
    let textWrapper = document.querySelector('#ct .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
    .add({
      targets: '#ct .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '#ct',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
      });
  }
  
}