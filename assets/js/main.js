//   loader

const loader = document.querySelector('.loader-div');
window.addEventListener('load',()=>{
    loader.style.display = 'none'
})

// client carousel
$(document).ready(function(){
    $('.client-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        dots:false,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1300:{
                items:5
            },
            1500:{
                items:5
            }
        }
      })
});


// counter
$(document).ready(function(){
    $('.counter').countUp(
        {
        delay: 5,
        time: 1500
        }
    );
})

// sticky navbar
window.onscroll = ()=>{
    makeSticky()
}

const navbar = document.querySelector('.iec-navbar');
const sticky = 100
const logo = document.querySelector('.main-logo')

function makeSticky(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add('fixed-navbar')
        logo.classList.add('sticky-logo')
        navbar.style.height = 'auto'
    }else{
        navbar.classList.remove('fixed-navbar')
        logo.classList.remove('sticky-logo')
    }
}

// aos
AOS.init();


// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
  });


