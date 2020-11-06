'use strict';

{
  // メニュー
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

}