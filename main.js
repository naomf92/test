const modal =  document.getElementsByClassName('modal')//モーダル要素

// こちらも.modalCloseと同様にquerySelectorAllにしましょう
const openBtn = document.getElementsByClassName('btn');//モーダルを出すボタン要素

//const closeBtn = document.getElementsByClassName('modalClose')[0];
const closeBtn = document.querySelectorAll('.modalClose');

// モーダル以外の場所クリックのイベントリスナー
// window.addEventListener('click', clickAnywhere);

// モーダルオープンの関数
function modalOpen(e) {
    let dataModalOpen = e.currentTarget.getAttribute('data-name');

    for(let i = 0; i < modal.length; i++){
        if (modal[i].getAttribute('data-name') === dataModalOpen) {
            console.log(modal[i]);
            modal[i].classList.add('is-open');
        }
    }
}
openBtn.addEventListener('click', modalOpen);
// ↑ 定数openBtnの配列番号(取得d系た要素の番号)番に対して、イベント引数の入った引数eを渡して、関数modalOpenを呼び出しましょう
// ヒント: 今日の面談で関数pressXbtnの.addEventListenerの第二引数書き換えで行った作業と全く同じです。
// インデックス番号の変数で、「そんな変数ないです」とエラーが出ますが、これは、上記for文の場所が、今の場所ではなく、移動させる必要があるからです。

// モーダルを閉じる関数
// ↑ この関数は、閉じることだけに特化しているので、「x印で」閉じるのか「外の範囲で」閉じるのかに関して(where)詳しい機能を用意するのは、これからです
function modalClose() {
    for(let i = 0; i < modal.length; i++){
        modal[i].classList.remove('is-open');
        modal[i].classList.add('is-close');

        setTimeout(function() {
            modal[i].classList.remove('is-close')
        }, 1000);
    }
}

// x印クリックでmodalを閉じる関数をここに宣言する
// ヒント1: まず閉じるx印要素を取得すると、どこの話をしているのかがJSが把握しやすいです
// ヒント2: ヒント1で取得したx印HTML要素に対して、何をどうするかという指示を書いていきます
function pressXbtn(){
    for(let i = 0; i < closeBtn.length; i++){
        closeBtn[i].addEventListener('click',function(e) {
            modalClose(e);
        });
    }
}
pressXbtn();

// // モーダル以外がクリックされた時に閉じる関数
// function clickAnywhere(e) {// 以下のeventは引数として扱うので、宣言時に用意も必要です
//     if(e.target == modal) {
//         modal.style.display = 'none';
//         console.log(e);
//     }
// }
