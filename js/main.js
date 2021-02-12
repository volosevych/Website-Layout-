$(function () {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><i class="fas fa-chevron-right arrowIcon"></i></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><i class="fas fa-chevron-left arrowIcon"></i></button>',
        infinite: false
    });
    
    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle();
    })
    
    $('select').styler();
})