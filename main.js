const modal =  document.getElementsByClassName('modal')//モーダル要素

const openBtn = document.querySelectorAll('.btn');//モーダルを出すボタン要素

const closeBtn = document.querySelectorAll('.modalClose');//モーダルを閉じる要素

// モーダルオープンの関数
// function modalOpen(e) {
//     let dataModalOpen = e.currentTarget.getAttribute('data-name');

//     for(let i = 0; i < modal.length; i++){
//         if (modal[i].getAttribute('data-name') === dataModalOpen) {
//             modal[i].classList.add('is-open');
//         }
//     }
// }

function modalOpen() {
    for(let i = 0; i < modal.length; i++){

        function open(e) {
            let dataModalOpen = e.currentTarget.getAttribute('data-name');
            for(let i = 0; i < modal.length; i++){
                if (modal[i].getAttribute('data-name') === dataModalOpen) {
                    modal[i].classList.add('is-open');
                }
            }
        }
            openBtn[i].addEventListener('click', function(e) {
                open(e);});
        }
}
modalOpen();


// モーダルを閉じる関数
function modalClose() {
    for(let i = 0; i < modal.length; i++){
        modal[i].classList.remove('is-open');
        modal[i].classList.add('is-close');

        setTimeout(function() {
            modal[i].classList.remove('is-close')
        }, 1000);

        closeBtn[i].addEventListener('click',function(e) {
            modalClose(e);
        });
    }
}
modalClose();


// モーダル以外がクリックされた時に閉じる関数
function clickAnywhere(e) {
    for(let i = 0; i < modal.length; i++) {
        if(e.target === modal[i]) {
            modalClose();
        }
    }
}
window.addEventListener('click', clickAnywhere);