/*!
https://codepen.io/jmperez/pen/yYjPER
 */

window.onload = function () {
    var placeholder = document.querySelector('.placeholder'),
        small = placeholder.querySelector('.img-small')
    // 1: load small image and show it
    var img = new Image();
    img.src = small.src;
    img.onload = function () {
        small.classList.add('loaded');
    };
    // 2: load large image
    var imgLarge = new Image();
    imgLarge.src = placeholder.dataset.large;
    imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
    };
    placeholder.appendChild(imgLarge);
}

//jquery
$(".placeholder:not('.loaded')").each(function( index ) {
    var small = $(this).find('.img-small');
    // 1: load small image and show it
    var img = new Image();
    img.src = small.attr('src');
    img.onload = function () {
        small.addClass('loaded');
    };

    var imgLarge = new Image();
    imgLarge.src = $(this).data('large');
    imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
    };
    $(this).append(imgLarge).addClass('loaded');
    // $(this).append(imgLarge).removeClass('placeholder').find('img:eq(0)').remove();
});