const modal =  document.getElementsByClassName('modal')//モーダル要素
//console.log(modal);

const openBtn = document.getElementsByClassName('btn')[0];//モーダルを出すボタン要素
//console.log(openBtn);

//const closeBtn = document.getElementsByClassName('modalClose');

// クリックで開くイベントリスナー
openBtn.addEventListener('click', modalOpen);

// クリックで閉じるイベントリスナー
//closeBtn.addEventListener('click', modalClose);

// モーダル以外の場所クリックのイベントリスナー
// window.addEventListener('click', clickAnywhere);

// モーダルオープンの関数
function modalOpen() {
    if () {//押したボタンが一つ目のボタンなら → 「何かしらのボタンが押されたら」の方が再利用性がありますね
        modal[0].classList.add('modalOpen');//開くボタンを押したら一つ目のモーダルが出る
    } else if () {//押したボタンが二つ目のボタンなら → 3つ目、4つ目と増えるとその分else ifが増えるので、そうならないようにするには、配列のインデックス番号を[i]など、仮に値が入る変数として用意するのが良さそうです（再利用性の高さを意識）
    }
}

// モーダルを閉じる関数
//function modalClose() {
    //modal.classList.remove('modalOpen');
    //modal.style.display = 'none';//閉じるボタンを押したらモーダルが消える
//}

// // モーダル以外がクリックされた時に閉じる関数
// function clickAnywhere(e) {// 以下のeventは引数として扱うので、宣言時に用意も必要です
//     if(e.target == modal) {
//         modal.style.display = 'none';
//         console.log(e);
//     }
// }