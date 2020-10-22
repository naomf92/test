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
    // 条件式ヒント: modalの値の中身の「長さ」を把握するメソッドを使うと、モーダルが増えても対応できる
    for(let i = 0; i < modal.length; i++){
        console.log(i);
        // ↓ HTMLに追加するdata属性の属性と値を条件式に使える
        if (modal[i].dataset.name == "modal1") {//何かしらのボタンが押されたら
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