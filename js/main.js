// Header menu

function openMenu() {
    $('.header__more').on('click', function(){
        $(this).toggleClass('show');
    });
}

if($(window).width() < 1161) {
    openMenu();
}

$('.mobile-burger').on('click', function(){
    $('.header_nav').addClass('show');
    $('html').addClass('overflow');
});

$('.mobile-close').on('click',function(){
    $('.header_nav').removeClass('show');
    $('html').removeClass('overflow');
});

// /Header menu

// Resize
$(window).on('resize', function(){
   if($(window).width() < 1161) {
        openMenu();
    }
    
    showMoreInfo();
    showMoreInfoMain();
});

// /Resize

// Fixed header

$(document).on('scroll',function(){
    let number = 0;
    
    if($(document).width() > 1160) {
        number = 600;
    }
    
    if($(document).width() < 1160) {
        number = 400;
    }
    
    if($(document).width() < 775) {
        number = 260;
    }
    
    if($(document).scrollTop() > number) {
        $('.header__wrapper').addClass('fixed');
    }else {
        if($('.header__wrapper').is('.fixed')) {
            $('.header__wrapper').addClass('hide');
            setTimeout(deleteCLass, 300);
        }
        
        function deleteCLass() {
            $('.header__wrapper').removeClass('hide');
            $('.header__wrapper').removeClass('fixed');
        }
    }
})

// /Fixed header
// More info consultation


function showMoreInfo() {
    let wrapper = $('.trainung-info__structure_item');
    wrapper.each(function(item){

        let content = $(this).find('.content').height();
        let info = $(this).find('.content p').height();

        if(info > content) {
            $(this).find('.more').addClass('show');
        }else {
            $(this).find('.more').removeClass('show');
        }
    });
}
showMoreInfo();

function showMoreInfoMain() {
    let content = $('.description__wrapper').find('.content').height();
    let info = $('.description__wrapper').find('.content p').height();

    if(info > content) {
        $('.description__wrapper').find('.more_link').addClass('show');
    }else {
        $('.description__wrapper').find('.more_link').removeClass('show');
    }
}

showMoreInfoMain();

$('.description__wrapper .more_link').on('click', function(e){
    e.preventDefault();
    
    let parent = $(this).parents('.description__wrapper').toggleClass('show');;
});

$('.trainung-info__structure_item .more').on('click', function(e){
    e.preventDefault();
    
    let parent = $(this).parents('.trainung-info__structure_item');
    parent.find('.content').toggleClass('show');
});

// /More info consultation



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

$('.popup__drop-item').on('click', function(){
    let text = $(this).text();
    let parent = $(this).parents('.popup__drop');
    
    parent.find('.js-value').val(text);
    $('.popup__drop').removeClass('active');
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

$(document).on('click', function(e){
    if(!e.target.closest('.button__wrapper')) {
        $('.button__wrapper').removeClass('active')
    }
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
