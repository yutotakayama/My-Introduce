'use strict'

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


  // スライドショー
  window.addEventListener('load', function () {
    viewSlide('.slide img');
  });

  function viewSlide(className, slideNo = -1) {
    let imgArray = document.querySelectorAll(className);

    if (slideNo >= 0) {
      //初回以外は現在のスライドを消す
      imgArray[slideNo].style.opacity = 0;
    }

    slideNo++;

    if (slideNo >= imgArray.length) {
      slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
    }

    imgArray[slideNo].style.opacity = 1;

    setTimeout(function(){viewSlide(className, slideNo);}, 3000);
  }
}