jQuery(document).ready(function($){

	function fade_header() {

		if ( $(window).width() > 300 ) {

			window_scroll = $(this).scrollTop();

			if ( window_scroll > $('#header').height() ) {

				$('#secondary-header').fadeIn();

			} else {
				
				$('#secondary-header').fadeOut('fast');

			}
		}
	}

	$(window).scroll(function() { fade_header(); });
	
	//toggle menu
	  
    $("li.content").hide();
    $("ul.toggle-menu").delegate("li.toggle", "click", function() { 
        $(this).next().toggle("fast").siblings(".content").hide("fast");
    });

	
	// Fading welcome message

	function detect_browser_width() {
		if ( $(window).width() > 800 ) {
			$('#header').addClass('fade');
		} else {
			$('#header').removeClass('fade');
		}	
	}
	detect_browser_width();

	$(window).resize(function() {
		detect_browser_width()
	});

	function fade_welcome() {
		if ( $(window).width() > 800 ) {

        window_scroll = $(this).scrollTop();

	   		$(".welcome").css({
				  'opacity' : 1-(window_scroll/300)
	    	});
		}
	}

	$(window).scroll(function() { fade_welcome(); });
	

	//Scroll to anchor
    $(".scrolltoanchor").click(function() {
        $.scrollTo($($(this).attr("href")), {
            duration: 950
        });
        return false;
    });
	

	
	
});