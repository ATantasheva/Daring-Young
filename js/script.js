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
// Перед переключением слайда, убираем классы на точках
$('.slider').on('beforeChange', function() {
   $('.slick-dots li').each(function(i,el){
     $(el).removeClass('junior__dot specialist__dot director__dot');
   })
 })
 // Добавляем классы после переключения слайда
 $(".slider").on("afterChange", function (){
   if($('.slick-slide.slick-current').hasClass('junior__background')) {
     $('.slick-dots')
       .addClass('junior__dot')
       .removeClass('specialist__dot director__dot');
   }
   if($('.slick-slide.slick-current').hasClass('specialist__background')) {
     $('.slick-dots')
       .addClass('specialist__dot')
       .removeClass('junior__dot director__dot');
   }
   if($('.slick-slide.slick-current').hasClass('director__background')) {
     $('.slick-dots')
       .addClass('director__dot')
       .removeClass('specialist__dot junior__dot');
   }
 })

