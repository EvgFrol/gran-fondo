document.addEventListener("DOMContentLoaded", function(event){
    let menu = document.querySelector('.menu');
    let menuButton = document.querySelector('.nav-toggle');
    let overlay = document.querySelector('.overlay');
    let menuPanel = document.querySelector('.menu-panel');
    let socialMediaLinks = document.querySelector('.social-media-links');
    
    let subscribeButton = document.querySelector('.subscribe-form').querySelector('button');
   
    let subscribeInput = document.querySelector('.subscribe-form').querySelector('input');

    subscribeInput.addEventListener('keyup',(e)=>{
        subscribeButton.disabled=true;
        !subscribeButton.classList.contains('disabled') && subscribeButton.classList.add('disabled');
        
        let timer;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)){
                subscribeButton.disabled=false;
                subscribeButton.classList.remove('disabled');
            }
        },2000);
    })

    let makePageUnactive = () =>{
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflowY = 'hidden';
    }

    let makePageActive = () =>{
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflowY = 'auto';
    }
    

    document.addEventListener('scroll',(e)=>{
       if(window.pageYOffset>20){
            window.innerWidth > 904 && !menuPanel.classList.contains('scrolled-menu') &&  menuPanel.classList.add('scrolled-menu');
           socialMediaLinks.style.display="none";
       }else{
            menuPanel.classList.remove('scrolled-menu');
           socialMediaLinks.style.display="block";
       }
    });

    menuButton.addEventListener('click',()=>{
       makePageUnactive();
    })

    menu.addEventListener('click',(e)=>{
       makePageActive();
    })
    overlay.addEventListener('click', ()=>{
        if(menu.classList.contains('active')){
            makePageActive();
        }
    })
});

$(document).ready(function(){
    $(".phone-mask").mask("+7(999)999-99-99");
    $(".birthday-mask").mask("99.99.9999");
});