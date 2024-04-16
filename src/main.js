document.addEventListener('DOMContentLoaded', function() {
    const btnBack = document.querySelector('#btn-back');
    const imgCont = document.querySelector('#img-holder');
    const btnNew = document.querySelector('#btn-new');

    btnBack.addEventListener('click', () => {
        window.history.back();
    });

    btnNew.addEventListener('click', () => {
        history.go(0);
    });
});