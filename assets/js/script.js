var slider1  = new Swiper ('.gallery-slider', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 3,

    navigation: {
        nextEl: '.pp21',
        prevEl: '.nn21',
    },
breakpoints:{
  300:{
    loopedSlides: 1,

  },
  800: {
    loopedSlides: 3,
  },
}
});

  var slider2  = new Swiper ('.gallery-thumbs', {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,

      breakpoints: {
        300: {
          slidesPerView: 1,
         

        },
        800: {
          slidesPerView: 3,
        },
      },

     
  

  });
  slider1.controller.control = slider2;
  slider2.controller.control = slider1;
  
  
  

  jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 800) {
        $('.selector').addClass('mobile-slider');
      } else if (ww >= 800) {
        $('.selector').removeClass('mobile-slider');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    alterClass();
  });

  $(document).ready(function(){
    $('.mobile-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      rtl: true,
      prevArrow: $(".btns1"),
      nextArrow: $(".btns2"),
      responsive: [
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 3,
          }
        },
      ]
    });
  });

 


  $(document).ready(function(){
    $('.newslider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      rtl: true,
      prevArrow: $(".btns1"),
      nextArrow: $(".btns2"),

    });
  });




  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  $(function () {
    $(".btnf1").click(function (e) {
      e.preventDefault();
      $(".chevron1").toggleClass("active1");
    });
  });
  



  
  $(function () {
    $(".btnf2").click(function (e) {
      e.preventDefault();
      $(".chevron2").toggleClass("active2");
    });
  });
  



  
  $(function () {
    $(".btnf3").click(function (e) {
      e.preventDefault();
      $(".chevron3").toggleClass("active3");
    });
  });
  

  
  $(function () {
    $(".btnf1").click(function (e) {
      e.preventDefault();
      $("#footer2").removeClass("show");
      $(".chevron2").removeClass("active2");
      $("#footer3").removeClass("show");
      $(".chevron3").removeClass("active3");


    });
  });
  $(function () {
    $(".btnf2").click(function (e) {
      e.preventDefault();
      $("#footer1").removeClass("show");
      $(".chevron1").removeClass("active1");

      $("#footer3").removeClass("show");
      $(".chevron3").removeClass("active3");

    });
  });
  $(function () {
    $(".btnf3").click(function (e) {
      e.preventDefault();
      $("#footer2").removeClass("show");
      $(".chevron2").removeClass("active2");

      $("#footer1").removeClass("show");
      $(".chevron1").removeClass("active1");

    });
  });









/*----------------------
------------------------
--------blog-------------
--------------------------
------------------------*/






$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  $("#logosidebar1").toggleClass("widthchange");
  $(".nav-link").toggleClass("hidetextnav");
  $(".mobile").toggleClass("hidetextnav");
  $("#btnr").toggleClass("btnwidth");
  $(".nav-items").toggleClass("iconicon");
  $(".js-search").toggleClass("searchlittle");
  $(".col-2").toggleClass("my-col");
  $(".col-10").toggleClass("my-col10");

});

$(".btn1").click(function(e) {
  e.preventDefault();
  $(".js-search").toggleClass("searchwidth");


});




$(function () {
  $(".btnf1").click(function (e) {
    e.preventDefault();
    $(".chevron1").toggleClass("active1");
  });
});





$(function () {
  $(".btnf2").click(function (e) {
    e.preventDefault();
    $(".chevron2").toggleClass("active2");
  });
});






$(function () {
  $(".btnf3").click(function (e) {
    e.preventDefault();
    $(".chevron3").toggleClass("active3");
  });
});
