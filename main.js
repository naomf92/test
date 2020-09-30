// const modal = document.getElementById('easyModal');//モーダル要素
const modal = document.querySelector('.modal');
// const modal = document.querySelector(`.modal[data-name="${}]`);

// const openBtn = document.getElementById('modalOpen');//モーダルを出すボタン要素
const openBtn = document.querySelector('.btn');

const closeBtn = document.getElementsByClassName('modalClose')[0];

// クリックで開くイベントリスナー
openBtn.addEventListener('click', modalOpen);

// クリックで閉じるイベントリスナー
closeBtn.addEventListener('click', modalClose);

// モーダル以外の場所クリックのイベントリスナー
window.addEventListener('click', clickAnywhere);

// モーダルオープンの関数
function modalOpen() {
    modal.style.display = 'block';//開くボタンを押したらモーダルが出る
    console.log(modal);
}

// モーダルを閉じる関数
function modalClose() {
    modal.style.display = 'none';//閉じるボタンを押したらモーダルが消える
}

// モーダル以外がクリックされた時に閉じる関数
function clickAnywhere(e) {// 以下のeventは引数として扱うので、宣言時に用意も必要です
    if(e.target == modal) {
        modal.style.display = 'none';
        console.log(e);
    }
}