// ハンバーガーメニューの開閉処理

document.addEventListener('DOMContentLoaded', function() {
  // メニューボタンとメニュー本体を取得
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  // メニューボタンをクリックしたとき、メニューの開閉をトグル
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // イベントのバブリングを止める
    menu.classList.toggle('open'); // メニューの表示/非表示を切り替え（クラスをaddまたはremove）
    menuBtn.classList.toggle('open'); // ボタンのアニメーション切り替え（クラスをaddまたはremove）
  });

  // メニュー内をクリックしたとき
  menu.addEventListener('click', function(e) {
    // メニュー内のリンクをクリックしたときだけメニューを閉じる
    if(e.target.tagName === 'A') {
      menu.classList.remove('open');
      menuBtn.classList.remove('open');
    }
    e.stopPropagation(); // イベントのバブリングを止める
  });

  // ドキュメントのどこかをクリックしたらメニューを閉じる
  document.addEventListener('click', function() {
    menu.classList.remove('open');
    menuBtn.classList.remove('open');
  });
});
