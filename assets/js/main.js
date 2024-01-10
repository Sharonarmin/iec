// client carousel
$(document).ready(function(){
    $('.client-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
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
