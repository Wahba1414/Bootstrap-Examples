$(document).ready(function(){
    $("#nav-bar-toggle").click(function(){
        console.log("toggle button clicked");
        $(this).toggleClass("change");
    })
    
    $("#dropdown-link").click(function(){
        console.log("dropdown clicked")
        $(this).parent().toggleClass("open-dropDwon-menu")
    })
    
    
    // On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('.custom-nav').addClass('not-transparent-nav') : $('.custom-nav').removeClass('not-transparent-nav');

        // Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
		
	});
    
    
    $('.carousel').carousel();
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    
    $('body').scrollspy({
		target: '.navbar',
		offset: $(window).height() / 2
	});
    
    // Smooth scroll
	$(".navbar a[href^='#']").on('click', function(e) {
//        console.log("Inside smooth scroll");
		e.preventDefault();
		var hash = this.hash;
//        console.log("hash >>>" , hash);
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});
    
    //back to top
    $('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});
    
    
    
    
    
        
});


