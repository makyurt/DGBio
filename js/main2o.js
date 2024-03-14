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
            nav = $('.header-nav-wrap'),
		    shead = $('.s-header');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle(); shead.toggleClass('opaque');
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
                    breakpoint: 1151,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						infinite: true,
                    }
                },
                {
                    breakpoint: 701,
                    settings: {
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
                    breakpoint: 1151,
                    settings: {
						arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
						infinite: true,
                    }
                },
				{
                    breakpoint: 701,
                    settings: {
						arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
						infinite: true,
                    }
                }
            ]
        });
    };
	
	
	 /* Stat Counter
    * ------------------------------------------------------ */
    var ssStatCount = function() {

        var statSection = $(".s-stats"),
        stats = $(".stats__count");

        statSection.waypoint({

            handler: function(direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                } 
               
            },

            offset: "90%"

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
				
			history.pushState(null, null, target);

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
				
			history.pushState(null, null, target);

            });
        });
		
		$('.ssbc').on('click', function (e) {
            var target = this.hash,
                $target = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top +255
            }, cfg.scrollDuration, 'swing').promise().done(function () {
				
			history.pushState(null, null, target);

            });
        });
		
		$('.ssbcm').on('click', function (e) {
            var target = this.hash,
                $target = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top +435
            }, cfg.scrollDuration, 'swing').promise().done(function () {
				
			history.pushState(null, null, target);

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
            delay: 100,
            once: false,
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
/* get year difference from  2014 to current year*/
function getYearDifference() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startYear = 2014;
  const yearDifference = currentYear - startYear;
  // Get all span elements with class "year-diff"
  var spanElements = document.querySelectorAll('.year-diff');

  // Append the year difference to each span element
  spanElements.forEach(function(span) {
    span.textContent = yearDifference;
  });
}

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
		    ssStatCount();
		    includeHTML();
        getYearDifference();
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

/* Home button script */
function homeButton() {
var toggleButton = $('.header-menu-toggle'),
             nav = $('.header-nav-wrap'),
		   shead = $('.s-header');
	
shead.removeClass('opaque');
     
if (toggleButton.hasClass('is-clicked')) {
	toggleButton.removeClass('is-clicked');
	nav.slideToggle();
}
}

/* Remove pace (Run once) */
window.addEventListener("load", function(){
	setTimeout(function() {
        $('body').addClass('nopace');
    }, 1000);
});

/* lang menu text */
var path = location.pathname;
var string = location.search.substring(1);

    if (string.includes ("en"))
		document.getElementById("lmenuname").innerHTML = "English"+"&nbsp;&#9662;";

    else if (path.includes ("af"))
		document.getElementById("lmenuname").innerHTML = "Afrikaans"+"&nbsp;&#9662;";

    else if (path.includes ("cs"))
		document.getElementById("lmenuname").innerHTML = "Čeština"+"&nbsp;&#9662;";

    else if (path.includes ("da"))
		document.getElementById("lmenuname").innerHTML = "Dansk"+"&nbsp;&#9662;";

    else if (path.includes ("de"))
		document.getElementById("lmenuname").innerHTML = "Deutsch"+"&nbsp;&#9662;";

    else if (path.includes ("es"))
		document.getElementById("lmenuname").innerHTML = "Español"+"&nbsp;&#9662;";

    else if (path.includes ("fr"))
		document.getElementById("lmenuname").innerHTML = "Français"+"&nbsp;&#9662;";

    else if (path.includes ("hr"))
		document.getElementById("lmenuname").innerHTML = "Hrvatski"+"&nbsp;&#9662;";

    else if (path.includes ("id"))
		document.getElementById("lmenuname").innerHTML = "Indonesia"+"&nbsp;&#9662;";

    else if (path.includes ("it"))
		document.getElementById("lmenuname").innerHTML = "Italiano"+"&nbsp;&#9662;";

    else if (path.includes ("sw"))
		document.getElementById("lmenuname").innerHTML = "Kiswahili"+"&nbsp;&#9662;";

    else if (path.includes ("hu"))
		document.getElementById("lmenuname").innerHTML = "Magyar"+"&nbsp;&#9662;";

    else if (path.includes ("ms"))
		document.getElementById("lmenuname").innerHTML = "Melayu"+"&nbsp;&#9662;";

    else if (path.includes ("nl"))
		document.getElementById("lmenuname").innerHTML = "Nederlands"+"&nbsp;&#9662;";

    else if (path.includes ("nb"))
		document.getElementById("lmenuname").innerHTML = "Norsk"+"&nbsp;&#9662;";

    else if (path.includes ("fil"))
		document.getElementById("lmenuname").innerHTML = "Pilipino"+"&nbsp;&#9662;";

    else if (path.includes ("pl"))
		document.getElementById("lmenuname").innerHTML = "Polski"+"&nbsp;&#9662;";

    else if (path.includes ("pt"))
		document.getElementById("lmenuname").innerHTML = "Português"+"&nbsp;&#9662;";

    else if (path.includes ("ro"))
		document.getElementById("lmenuname").innerHTML = "Română"+"&nbsp;&#9662;";

    else if (path.includes ("sq"))
		document.getElementById("lmenuname").innerHTML = "Shqip"+"&nbsp;&#9662;";

    else if (path.includes ("sl"))
		document.getElementById("lmenuname").innerHTML = "Slovenščina"+"&nbsp;&#9662;";

    else if (path.includes ("fi"))
		document.getElementById("lmenuname").innerHTML = "Suomi"+"&nbsp;&#9662;";

    else if (path.includes ("sv"))
		document.getElementById("lmenuname").innerHTML = "Svenska"+"&nbsp;&#9662;";

    else if (path.includes ("vi"))
		document.getElementById("lmenuname").innerHTML = "Tiếng Việt"+"&nbsp;&#9662;";

    else if (path.includes ("tr"))
		document.getElementById("lmenuname").innerHTML = "Türkçe"+"&nbsp;&#9662;";

    else if (path.includes ("ru"))
		document.getElementById("lmenuname").innerHTML = "Русский"+"&nbsp;&#9662;";

    else if (path.includes ("bg"))
		document.getElementById("lmenuname").innerHTML = "български"+"&nbsp;&#9662;";

    else if (path.includes ("el"))
		document.getElementById("lmenuname").innerHTML = "Ελληνικά"+"&nbsp;&#9662;";

    else if (path.includes ("hi"))
		document.getElementById("lmenuname").innerHTML = "हिन्दी"+"&nbsp;&#9662;";

    else if (path.includes ("th"))
		document.getElementById("lmenuname").innerHTML = "ไทย"+"&nbsp;&#9662;";

    else if (path.includes ("ja"))
		document.getElementById("lmenuname").innerHTML = "日本語"+"&nbsp;&#9662;";

    else if (path.includes ("ko"))
		document.getElementById("lmenuname").innerHTML = "한국어"+"&nbsp;&#9662;";

    else if (path.includes ("zh"))
		document.getElementById("lmenuname").innerHTML = "简体中文"+"&nbsp;&#9662;";

    else if (path.includes ("ar"))
		document.getElementById("lmenuname").innerHTML = "العربية"+"&nbsp;&#9662;";

    else if (path.includes ("fa"))
		document.getElementById("lmenuname").innerHTML = "فارسی"+"&nbsp;&#9662;";

    else
		document.getElementById("lmenuname").innerHTML = "English"+"&nbsp;&#9662;";
