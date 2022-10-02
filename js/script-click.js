$(document).ready(function(){
   $('.slider').slick({
   arrows:true,
   dots: true,
   adaptiveHeight:true,
   slideToShow:1,
   speed: 500,
   easing:'linear',
   infinite: true,
   autoplay:false,
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
//объявляем пер по кол-ву экранов
$count = 1;
// по событию клик на кнопку
$(".slick-dots").focus(function() {
if ($count == 1) {
   $('.slick-dots').addClass('.dots-color')
}
else {
   
}
});


});

