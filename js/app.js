$(document).ready(function () {

        $('.menu-icon').click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
          $('.main-menu').removeClass("open-menu");
           $('.navigation').removeClass("open-menu");
        } else {
          $('.main-menu').addClass("open-menu");
          $('.navigation').addClass("open-menu");
        }
        $(this).data("clicks", !clicks);
      });


        $("#brands-caro").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
       lazyLoad : true,
      paginationSpeed : 400,
      singleItem:true,
      pagination:true,
      autoPlay: true,
      stopOnHover: true,
      transitionStyle : "fade"
 
     
 
  });

   $(function() {
      var $slides = $('#slides');

      Hammer($slides[0]).on("swipeleft", function() {
        $slides.data('superslides').animate('next');
      });

      Hammer($slides[0]).on("swiperight", function() {
        $slides.data('superslides').animate('prev');
      });

      $slides.superslides({
        hashchange: true,
        play: 20000,
        animation_speed: 500
      });
    });






});


