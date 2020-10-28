const modal =  document.getElementsByClassName('modal')//モーダル要素
//console.log(modal);

const openBtn = document.getElementsByClassName('btn')[0];//モーダルを出すボタン要素
//console.log(openBtn);

const closeBtn = document.getElementsByClassName('modalClose')[0];
console.log(closeBtn);

// クリックで開くイベントリスナー
openBtn.addEventListener('click', modalOpen);

// クリックで閉じるイベントリスナー
closeBtn.addEventListener('click', modalClose);

// モーダル以外の場所クリックのイベントリスナー
// window.addEventListener('click', clickAnywhere);

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
            modal[i].classList.add('modalOpen');//[i]個目のモーダルが出る
            console.log('if文スコープ内');
        }
        console.log('for文スコープ内');
    }
    console.log('for文あと');
}

// モーダルを閉じる関数 ← こちらを先に取り組みましょう
function modalClose() {
    modal[0].classList.remove('modalOpen');
}

// // モーダル以外がクリックされた時に閉じる関数
// function clickAnywhere(e) {// 以下のeventは引数として扱うので、宣言時に用意も必要です
//     if(e.target == modal) {
//         modal.style.display = 'none';
//         console.log(e);
//     }
// }