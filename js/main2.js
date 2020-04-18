/* ===================================================================
 * Main JS
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration

    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
    var ssPreloader = function() {
        
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        
        });
    };


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var ssMenuOnScrolldown = function() {
        
        var hdr= $('.s-header'),
            hdrTop = $('.s-header').offset().top;

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > hdrTop) {
                hdr.addClass('sticky');
            }
            else {
                hdr.removeClass('sticky');
            }

        });
    };


   /* Mobile Menu
    * ---------------------------------------------------- */ 
    var ssMobileMenu = function() {

        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $WIN.on('resize', function() {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function() {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.slideToggle(); 
            }
        });

    };


   /* Highlight the current section in the navigation bar
    * ------------------------------------------------------ */
    var ssWaypoints = function() {

        var sections = $(".target-section"),
            navigation_links = $(".header-nav-wrap li a");

        sections.waypoint( {

            handler: function(direction) {

                var active_section;

                active_section = $('section#' + this.element.id);

                if (direction === "up") active_section = active_section.prevAll(".target-section").first();

                var active_link = $('.header-nav-wrap li a[href="#' + active_section.attr("id") + '"]');

                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
            },
            offset: '25%'
        });
    };


   /* Slick slider
    * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        
        $('.about-desc__slider').slick({
			prevArrow: '<a class="slide-arrowab prev-arrowab"></a>',
            nextArrow: '<a class="slide-arrowab next-arrowab"></a>',
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnFocus: true,
			autoplay: false,
            autoplaySpeed: 7500,
            responsive: [
                {
                    breakpoint: 1401,
                    settings: {
						arrows: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1101,
                    settings: {
						autoplay: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
						infinite: true,
                    }
                },
                {
                    breakpoint: 701,
                    settings: {
						autoplay: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
						infinite: true,
                    }
                }
            ]
        });

        $('.testimonials__slider').slick({
			prevArrow: '<a class="slide-arrow prev-arrow"></a>',
            nextArrow: '<a class="slide-arrow next-arrow"></a>',
            arrows: true,
            dots: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnFocus: true,
			autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1001,
                    settings: {
						autoplay: true,
						arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
						infinite: true,
                    }
                }
            ]
        });
    };


   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var ssSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {


            });
        });
		
		$('.smoothscrollup').on('click', function (e) {
            var target = this.hash,
                $target = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top -100
            }, cfg.scrollDuration, 'swing').promise().done(function () {


            });
        });

    };


   /* Animate On Scroll
    * ------------------------------------------------------ */
    var ssAOS = function() {
        
        AOS.init( {
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 250,
            once: true,
            disable: 'mobile'
        });

    };


    /* Back to Top
    * ------------------------------------------------------ */
    var ssBackToTop = function() {
        
    var pxShow      = 500,
        goTopButton = $(".go-top");

        if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');

        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                if(!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible')
            } else {
                goTopButton.removeClass('link-is-visible')
            }
        });
    };


   /* Initialize
    * ------------------------------------------------------ */
    (function clInit() {

        ssPreloader();
        ssMenuOnScrolldown();
        ssMobileMenu();
        ssWaypoints();
        ssSlickSlider();
        ssSmoothScroll();
        ssAOS();
        ssBackToTop();

    })();

})(jQuery);


/* Clickable language menu */
function lmenu() {
  document.getElementById("lddown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show'),
		openDropdown.classList.add('hide')
      }
    }
  }
}

/* include html */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("includeHTML");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("includeHTML");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};