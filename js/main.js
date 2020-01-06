// Header menu

$(".header__more").hover(
    function() {
        $(this).children('.header__link').addClass('z_index');
    },
    function() {
        $(this).children('.header__link').removeClass('z_index');
    }
);

// /Header menu


// Slider

$('.slider_button .next').on('click',function(){
    $('.portfolio__slider_item.show').next().addClass('show');
    $('.portfolio__slider_item.show').prev().removeClass('show');
    $('.slider_button .prev').removeClass('off_button');
    
    if(!$('.portfolio__slider_item.show').nextAll('.portfolio__slider_item').length) {
        $(this).addClass('off_button');
    }
});

$('.slider_button .prev').on('click',function(){
    $('.portfolio__slider_item.show').prev().addClass('show');
    $('.portfolio__slider_item.show').next().removeClass('show');
    $('.slider_button .next').removeClass('off_button');
    
    if(!$('.portfolio__slider_item.show').prevAll('.portfolio__slider_item').length) {
        $(this).addClass('off_button');
    }
});

// /Slider

// News more 

$('.js-news').on('click', function(){
    $('.news__list').toggleClass('active');
    $('.news_button').toggleClass('active');
    
});

// /News more

// Popup 
$('.js-button').on('click', function(){
    let target = $(this).attr('data-target');
    let classElem = $(this).attr('data-elem');
    
    $('.popup[data-target='+ target +']').addClass('active');
    $('.popup__drop[data-elem=' + classElem + ']').addClass('active-order');
    $('.overlay').addClass('active');
});

$('.drop_button').on('click', function(){
    $('.popup__drop').toggleClass('active');
});

$('.js-close,.overlay').on('click', function(){
    $('.popup').removeClass('active');
    $('html').removeClass('overflow');
    $('.overlay').removeClass('active');
    $('.popup__drop').removeClass('active-order');
});

// /Popup

$('.button__wrapper').on('click', function(){
    $(this).toggleClass('active');
});

// Form 
$('.callback_info .main_button').on('click',function(){
    if($('.js-input[type="tel"]').val() === "") {
        $('.js-input[type="tel"]').addClass('error');
    }
});

$('.js-input[type="tel"]').on('click',function() {
    $(this).removeClass('error');
});

$('.js-input').blur(function(){
    if($('.js-input').val() !== "") {
        $(this).addClass('full_input');
    } else {
         $(this).removeClass('full_input');
    }
});
