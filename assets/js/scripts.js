(function ($) {
 "use strict";

	/*----------------------------
	 wow js active
	------------------------------ */
	 new WOW().init();
	/*------------- preloader js --------------*/
	$(window).on('load',function() { // makes sure the whole site is loaded
		$('.loader-container').fadeOut(); // will first fade out the loading animation
		$('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
	})

    // slider-active
	 $('.slider-active').owlCarousel({
        margin:0,
		loop:true,
		autoplay:true,
		autoplayTimeout:4000,
        nav:true,
		smartSpeed:800,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // slider-active
     $('.slider-active2').owlCarousel({
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        nav:true,
        smartSpeed:800,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // slider-active
	$(".slider-active").on('translate.owl.carousel', function(){
		$('.slider-items h2').removeClass('fadeInUp animated').hide();
		$('.slider-items h3').removeClass('fadeInUp animated').hide();
        $('.slider-items a').removeClass('fadeInUp animated').hide();
	});

	$(".slider-active").on('translated.owl.carousel', function(){
		$('.owl-item.active .slider-items h2').addClass('fadeInUp animated').show();
		$('.owl-item.active .slider-items h3').addClass('slideInUp animated').show();
        $('.owl-item.active .slider-items a').addClass('fadeInUp animated').show();
	});
    // slider-active
     $('.blog-active').owlCarousel({
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        nav:true,
        smartSpeed:800,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
	//slider-area background setting
    function sliderBgSetting() {
        if ($(".slider-area .slider-items").length) {
            $(".slider-area .slider-items").each(function() {
                var $this = $(this);
                var img = $this.find(".slider").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }
	/*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
	$(window).on('load', function() {

		sliderBgSetting();

	});

    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
                });

                if ( window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
    bgParallax();
	$(window).on("scroll", function() {
		bgParallax();
	});


	// // stickey menu
	$(window).on('scroll',function() {
		var scroll = $(window).scrollTop(),
			mainHeader = $('#sticky-header'),
			mainHeaderHeight = mainHeader.innerHeight();

		// console.log(mainHeader.innerHeight());
		if (scroll > 1) {
			$("#sticky-header").addClass("sticky");
		}else{
			$("#sticky-header").removeClass("sticky");
		}
	});

	/*--------------------------
	 scrollUp
	---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-arrow-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

	/*--
	Magnific Popup
	------------------------*/
	$('.popup').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}

	});

	// counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	// slicknav
	$('ul#navigation').slicknav({
		prependTo:".responsive-menu-wrap"
	});

    $('.grid').imagesLoaded( function() {

	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.portfolio',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.portfolio',
	  }
	});
	});

	/*-------------------------------------------------------
        blog details
    -----------------------------------------------------*/
    if ($(".booking-area,.about-area,.about-page-area,.shop-list-area").length) {
        var post = $(".booking-images,.about-img,.about-page-img,.shop-list-area .shop-img");

        post.each(function() {
            var $this = $(this);
            var entryMedia = $this.find("img");
			var entryMediaPic = entryMedia.attr("src");

            $this.css({
                backgroundImage: "url("+ entryMediaPic +")",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            })
        })
    }

    function setTwoColEqHeight($col1, $col2) {
        var firstCol = $col1,
            secondCol = $col2,
            firstColHeight = $col1.innerHeight(),
            secondColHeight = $col2.innerHeight();

        if (firstColHeight > secondColHeight) {
            secondCol.css({
                "height": firstColHeight + 1 + "px"
            })
        } else {
            firstCol.css({
                "height": secondColHeight + 1 + "px"
            })
        }
    }


	$(window).on("load", function() {
		setTwoColEqHeight($(".booking-images,.about-img,.about-page-img,.shop-list-area .shop-img"), $(".booking,.about-wrap,.about-page-wrap2,.shop-list-area .shop-content"));

	});

	/*---------------------
	// Ajax Contact Form
	--------------------- */

	$('.cf-msg').hide();
		$('form#cf button#submit').on('click', function() {
			var fname = $('#fname').val();
			var subject = $('#subject').val();
			var email = $('#email').val();
			var msg = $('#msg').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			if (!regex.test(email)) {
				alert('Please enter valid email');
				return false;
			}

			fname = $.trim(fname);
			subject = $.trim(subject);
			email = $.trim(email);
			msg = $.trim(msg);

			if (fname != '' && email != '' && msg != '') {
				var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: values,
					success: function() {
						$('#fname').val('');
						$('#subject').val('');
						$('#email').val('');
						$('#msg').val('');

						$('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
						setTimeout(function() {
							$('.cf-msg').fadeOut('slow');
						}, 4000);
					}
				});
			} else {
				$('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
			}
			return false;
	});

})(jQuery);
