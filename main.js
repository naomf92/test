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
function modalOpen(e) {// イベント引数を用意すると良いかもしれません
    // 条件式ヒント: modalの値の中身の「長さ」を把握するメソッドを使うと、モーダルが増えても対応できる
    // console.logでイベント引数eを検証すると、特定の要素選択のオプションが見つかります
    for(let i = 0; i < modal.length; i++){
        console.log(i);
        console.log(e);
        // ↓ HTMLに追加するdata属性の属性と値を条件式に使える
        // 厳密等価演算子を基本的には使用しましょう
        if (modal[i].dataset.name === `.modal[data-name="${e.}"`) {//何かしらのボタンが（イベントによって）押されたら → modal2や他のmodalを選択させる時に、書き方を考えなければいけません（上記の引数用意の箇所がその解決策です）
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