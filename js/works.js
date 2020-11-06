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

}