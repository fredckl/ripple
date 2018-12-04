document.addEventListener('DOMContentLoaded', function () {


    document.querySelectorAll('.square').forEach((elm) => {
        elm.addEventListener('click', fk_ripple);
    });

    document.querySelector('body').addEventListener('click', fk_ripple)
})