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
    });





