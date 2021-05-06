
$(document).ready(function(){
    $(".phone-mask").mask("+7(999)999-99-99");
    $(".birthday-mask").mask("99.99.9999");

    let timer;

    $('.subscribe-form input').on('keyup', function(e){
        $('.subscribe-form button').attr('disabled', 'true');
        !$('.subscribe-form button').hasClass('disabled') && $('.subscribe-form button').addClass('disabled');
        clearTimeout(timer);
        timer=setTimeout(function(){
            if (/^\w+@[a-zA_]+\.[a-zA-Z]{2,3}$/.test(e.target.value)){
                $('.subscribe-form button').attr('disabled','false');
                $('.subscribe-form button').removeClass('disabled');
            }
        },1000);
    })

    
    $(document).on('scroll',function(e){
        if(window.pageYOffset>20 &&  $(window).innerWidth() > 904){
            !$('.menu-panel').hasClass('scrolled-menu') &&  $('.menu-panel').addClass('scrolled-menu');
            $('.social-media-links').css('display') !=='none' && $('.social-media-links').hide();
        }else{
            $('.menu-panel').removeClass('scrolled-menu');
            $('.social-media-links').show();
        }
    });

    function makePageUnactive(){
        $('.menu').addClass('active');
        $('.overlay').addClass('active');
        $(document.body).css('overflowY', 'hidden');
    }

    function makePageActive(){
        $('.menu').removeClass('active');
        $('.overlay').removeClass('active');
        $(document.body).css('overflowY', 'auto');
    }

    $('.nav-toggle').on('click',function(){
        makePageUnactive();
     })
 
    $('.menu').on('click',function(e){
        makePageActive();
     })
    $('.overlay').on('click', function(){
         if($('.menu').hasClass('active')){
             makePageActive();
         }
     })
});
