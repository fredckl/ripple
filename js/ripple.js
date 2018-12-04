function fk_ripple(event) {
    event.stopPropagation();
    var target = event.currentTarget || event.target;
    var color = target.getAttribute('data-fk-ripple-color'),
        tH, tW, sizeSquare, span;

    if (target.querySelectorAll('.ripple').length) {
        return false;
    }

    // Get sizes on clicked element
    tH = target.clientHeight;
    tW = target.clientWidth;

    // Get de max value
    sizeSquare = Math.max(tH, tW);

    // Create SPAN element
    span = document.createElement('span');
    span.classList.add('fk_ripple');
    span.style.left = (event.offsetX - (sizeSquare / 2)) + 'px';
    span.style.top = (event.offsetY - (sizeSquare / 2)) + 'px';
    span.style.width = sizeSquare + 'px';
    span.style.height = sizeSquare + 'px';

    if (color) {
        span.style.backgroundColor = color;
    }

    // Insert span to the current target
    target.appendChild(span);


    // Remove SPAN element after 1s
    setTimeout(() => {
        target.removeChild(span);
    }, 1000);
}