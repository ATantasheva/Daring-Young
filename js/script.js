$(document).ready(function(){
   $('.slider').slick({
   arrows:true,
   dots: true,
   adaptiveHeight:true,
   slideToShow:1,
   speed: 500,
   easing:'linear',
   infinite: true,
   autoplay:true,
   autoplaySpeed: 2200,
pauseOnFocus:true,
pauseOnHover: false,
pauseOnDotsHover: true,
draggable: false, //блок свайп на ПК
swipe:true,
touchMove: true,
waitForAnimate:false,
responsive: [
   {
      breakpoint: 552,
      settings: {
         arrows:false,
      }
   }
]
});

});

