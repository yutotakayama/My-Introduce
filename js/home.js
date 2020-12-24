'use strict'

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