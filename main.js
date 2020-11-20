const modal =  document.getElementsByClassName('modal');

const openBtn = document.getElementsByClassName('btn');

const closeBtn = document.querySelectorAll('.modalClose');

const modalOpen = () => {
    for(let i = 0; i < modal.length; i++){

        const open = (e) => {
            let dataModalOpen = e.currentTarget.getAttribute('data-name');
            if (modal[i].getAttribute('data-name') === dataModalOpen) {
                modal[i].classList.add('is-open');
            }
        };
        openBtn[i].addEventListener('click', function(e) {
            open(e);});

        const close = () => {
            modal[i].classList.remove('is-open');
            modal[i].classList.add('is-close');

            setTimeout(function() {
            modal[i].classList.remove('is-close')
            }, 1000);
        };
        closeBtn[i].addEventListener('click', function(e) {
            close(e);});

        modal[i].addEventListener('click',function(e) {
            close(e)});
    }

};
modalOpen();

// function modalOpen() {
//     for(let i = 0; i < modal.length; i++){

//         function open(e) {
//             let dataModalOpen = e.currentTarget.getAttribute('data-name');
//             if (modal[i].getAttribute('data-name') === dataModalOpen) {
//                 modal[i].classList.add('is-open');
//             }
//         }
//         openBtn[i].addEventListener('click', function(e) {
//             open(e);});


//         function close() {
//             modal[i].classList.remove('is-open');
//             modal[i].classList.add('is-close');

//             setTimeout(function() {
//             modal[i].classList.remove('is-close')
//             }, 1000);
//         }
//         closeBtn[i].addEventListener('click', function(e) {
//             close(e);});

//         modal[i].addEventListener('click',function(e) {
//             close(e)});
//     }
// }
// modalOpen();