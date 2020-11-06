const modal =  document.getElementsByClassName('modal')//モーダル要素

const openBtn = document.getElementsByClassName('btn')[0];//モーダルを出すボタン要素

const closeBtn = document.getElementsByClassName('modalClose')[0];

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

// クリックで開くイベントリスナー
// → functionを使った関数宣言方法なので、宣言部分より上に記載されていても呼び出しは可能ですが、無名関数宣言に書き換えたい場合に挙動を起こすので、上から順に「宣言ブロック → 呼び出し記述」と変更しました
openBtn.addEventListener('click', modalOpen);

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

// クリックで閉じるイベントリスナー
// ↓ 仮にx印で閉じるように書いているので、「x印クリックでmodalを閉じる関数」に.addEventListenerを紐付けするように変更します
closeBtn.addEventListener('click', modalClose);

// // モーダル以外がクリックされた時に閉じる関数
// function clickAnywhere(e) {// 以下のeventは引数として扱うので、宣言時に用意も必要です
//     if(e.target == modal) {
//         modal.style.display = 'none';
//         console.log(e);
//     }
// }