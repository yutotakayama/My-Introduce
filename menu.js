'use strict';

{
  class Menu {
    constructor(open, overContent, close) {
      this.open = document.getElementById(open);
      this.overContent = document.querySelector(overContent);
      this.close = document.getElementById(close);
    }
    menu() {
      // ハンバーガーアイコンをクリックでメニューを表示
      this.open.addEventListener('click', () => {
        this.overContent.classList.add('show');
        this.open.classList.add('hide');
      });
      
      // ✖をクリックでメニューを非表示
      this.close.addEventListener('click', () => {
        this.overContent.classList.remove('show');
        this.open.classList.remove('hide');
      });
    }
  }
  const menuClick = new Menu('open', '.over-content', 'close');
  menuClick.menu();
}