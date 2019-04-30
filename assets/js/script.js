$(document).ready(function() {


    // STICKY NAVIGATION

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px'
          });

              // SCROLL ON BUTTONS

              $('.js--scroll-to-plans').click(function() {
                  $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 2500);
              });

              $('.js-scroll-to-start').click(function() {
                $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 2500);
            });

            // ANIMATIONS ON SCROLL
            $('.js--wp-1').waypoint (function(direction) {
                $('.js--wp-1').addClass('animated fadeIn')
            } , {
                offset:'80%'
            });

            $('.js--wp-2').waypoint (function(direction) {
                $('.js--wp-2').addClass('animated fadeInUp')
            } , {
                offset:'80%'
            });

            $('.js--wp-3').waypoint (function(direction) {
                $('.js--wp-3').addClass('animated fadeIn')
            } , {
                offset:'80%'
            });

            $('.js--wp-4').waypoint (function(direction) {
                $('.js--wp-4').addClass('animated pulse')
            } , {
                offset:'80%'
            });

            //MOBILE NAV
            $('.js--nav-icon').click(function(){
                var nav = $('.js--main-nav');
                var icon = $('.js--nav-icon');

                nav.slideToggle(200);
            });


});


