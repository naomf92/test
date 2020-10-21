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
    for(let i = 0; i < 2; i++){
        console.log(i);
        if (modal[i]) {//何かしらのボタンが押されたら
            console.log(modal[i]);
            modal[i].classList.add('modalOpen');//[i]個目のモーダルが出る
        }　
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