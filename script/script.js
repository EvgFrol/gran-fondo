document.addEventListener("DOMContentLoaded", function(event){
    let menu = document.querySelector('.menu');
    let menuButton = document.querySelector('.nav-toggle');
    let overlay = document.querySelector('.overlay');
    let menuPanel = document.querySelector('.menu-panel');
    let socialMediaLinks = document.querySelector('.social-media-links');


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
           // socialMediaLinks.style.display="none";
       }else{
            menuPanel.classList.remove('scrolled-menu');
           // socialMediaLinks.style.display="block";
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