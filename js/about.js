'use strict';

{
  // メニュー
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

  // ページトップへ戻る
  scrollTop('reply', 500);

  function scrollTop(elem,duration) {
    let target = document.getElementById(elem);
    target.addEventListener('click', function() {
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


}