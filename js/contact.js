'use strict';

{
  menu();
  function menu() {
    const open = document.getElementById('open');
    const overContent = document.querySelector('.over-content');
    const close = document.getElementById('close');
  
    // ハンバーガーアイコンをクリックでメニューを表示
    open.addEventListener('click', () => {
      overContent.classList.add('show');
      open.classList.add('hide');
    });
  
    // ✖をクリックでメニューを非表示
    close.addEventListener('click', () => {
      overContent.classList.remove('show');
      open.classList.remove('hide');
    });
  }

    window.addEventListener('load', me, false);
    function me() {
      var textWrapper = document.querySelector('#me');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: true})
        .add({
          targets: '#me .letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        }).add({
          targets: '#me .letter',
          translateX: [0,-30],
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 1100,
          delay: (el, i) => 100 + 30 * i
        });
      }
  
}