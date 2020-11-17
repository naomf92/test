const modal =  document.getElementsByClassName('modal')//モーダル要素

const openBtn = document.getElementsByClassName('btn')[0];//モーダルを出すボタン要素

const closeBtn = document.querySelectorAll('.modalClose');
//重複しているfor文をまとめる
function modalOpen() {
    for(let i = 0; i < modal.length; i++){

        function open(e) {
            let dataModalOpen = e.currentTarget.getAttribute('data-name');
            if (modal[i].getAttribute('data-name') === dataModalOpen) {
                modal[i].classList.add('is-open');
            }
        }
        openBtn[i].addEventListener('click', function(e) {
            open(e);});
    }
}
modalOpen();

function modalClose() {
    for(let i = 0; i < modal.length; i++){
        modal[i].classList.remove('is-open');
        modal[i].classList.add('is-close');

        setTimeout(function() {
            modal[i].classList.remove('is-close')
        }, 1000);

// モーダルオープンの関数
function modalOpen(e) {// イベント引数を用意すると良いかもしれません
    // ↓ ヒント: 引数eを検証するとdev toolコンソールに出てくる「選択したHTML要素を取得する技法」はどれでしょうか？
    let dataModalOpen = e.currentTarget.getAttribute('data-name'); // ← ここで引数eを検証します。for文内にはさらにスコープが入り組みます
    console.log('for文前');
    for(let i = 0; i < modal.length; i++){
        console.log(i);
        //↓ 記述が長くなるので、右辺は定数に入れて定数名で条件式に呼び出すのが可読性が高くなります
        if (modal[i].getAttribute('data-name') === dataModalOpen) {
            console.log(modal[i]);
            modal[i].classList.add('modalOpen');
            console.log('if文スコープ内');
        }
        console.log('for文スコープ内');
    }
}
modalClose();

function clickAnywhere(e) {
    for(let i = 0; i < modal.length; i++) {
        if(e.target === modal[i]) {
            modalClose();
        }
    }
}
window.addEventListener('click', clickAnywhere);