$(document).ready(function () {
   /*==============================
   // header
   ================================*/
   // if ($(window).width() <= 991) {
   //    $(".toggle-menu").on("click", function () {
   //       $(".header").toggleClass("menu-show");
   //    });
   //    $(".header-overlay, .mobile-top-cancel").on("click", function () {
   //       $(".header").removeClass("menu-show");
   //    });
   //    $(".menu .menu-item .menu-link").on("click", function () {
   //       $(this).parent("li").find(".sub-menu").slideToggle();
   //       $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
   //    });
   // }
   /*==============================
   // banner slider
   ================================*/
   // $(".banner-slider").owlCarousel({
   //    items: 1,
   //    loop: true,
   //    dots: false,
   //    nav: true,
   //    navText: [
   //       '<i class="fas fa-chevron-left"></i>',
   //       '<i class="fas fa-chevron-right"></i>',
   //    ],
   //    autoplay: true,
   //    autoplayTimeout: 4000,
   //    autoplayHoverPause: true,
   // });
   /*=================================
   // counter up
   ==================================*/
   // var counter = true;
   // $(".counterup-area").appear();
   // $(".counterup-area").on("appear", function () {
   //    if (counter) {
   //       $(".counterUp").each(function () {
   //          var $this = $(this);
   //          jQuery({
   //             Counter: 0,
   //          }).animate(
   //             {
   //                Counter: $this.attr("data-counter"),
   //             },
   //             {
   //                duration: 3000,
   //                easing: "swing",
   //                step: function () {
   //                   var num = Math.ceil(this.Counter).toString();
   //                   if (Number(num) > 99999) {
   //                      while (/(\d+)(\d{3})/.test(num)) {
   //                         num = num.replace(/(\d+)(\d{3})/, "");
   //                      }
   //                   }
   //                   $this.html(num);
   //                },
   //             }
   //          );
   //       });
   //       counter = false;
   //    }
   // });
   /*=============================
   // team-slider 
   ==============================*/
   // $(".team-slider").owlCarousel({
   //    items: 3,
   //    loop: true,
   //    margin: 30,
   //    autoplay: true,
   //    autoplayTimeout: 4000,
   //    autoplayHoverPause: true,
   //    dots: false,
   //    nav: true,
   //    navText: [
   //       '<i class="fas fa-chevron-left"></i>',
   //       '<i class="fas fa-chevron-right"></i>',
   //    ],
   //    responsiveClass: true,
   //    responsive: {
   //       0: {
   //          items: 1,
   //          nav: true,
   //          margin: 0,
   //       },
   //       600: {
   //          items: 2,
   //          nav: true,
   //       },
   //       992: {
   //          items: 3,
   //          nav: true,
   //       },
   //    },
   // });
   /*=============================
   // video pop up
   ===============================*/
   // $(".play-btn").magnificPopup({
   //    type: "iframe",
   //    iframe: {
   //       markup:
   //          '<div class="mfp-iframe-scaler">' +
   //          '<div class="mfp-close"></div>' +
   //          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
   //          "</div>",
   //       patterns: {
   //          youtube: {
   //             index: "youtube.com/",
   //             id: "v=",
   //             src: "https://www.youtube.com/embed/%id%?autoplay=1",
   //          },
   //          vimeo: {
   //             index: "vimeo.com/",
   //             id: "/",
   //             src: "//player.vimeo.com/video/%id%?autoplay=1",
   //          },
   //          gmaps: {
   //             index: "//maps.google.",
   //             src: "%id%&output=embed",
   //          },
   //       },
   //       srcAction: "iframe_src",
   //    },
   // });
   /*==============================
   //  Back to Top
   ===============================*/
   // var $window = $(window);
   // var distance = 300;
   // $window.scroll(function () {
   //    if ($window.scrollTop() >= distance) {
   //       $(".back-to-top").fadeIn();
   //    } else {
   //       $(".back-to-top").fadeOut();
   //    }
   // });
   // $(".back-to-top").click(function () {
   //    $("html, body").animate(
   //       {
   //          scrollTop: 0,
   //       },
   //       800
   //    );
   // });
});
