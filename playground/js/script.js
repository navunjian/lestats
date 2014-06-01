$(document).ready(function () {
     $('#homepage-logo-img').fadeIn(2000);
   });



// Use 'jQuery(function($) {' for inside WordPress blogs (without quotes)
$(document).ready(function () {
	var open = false;
	$('#footerSlideButton').click(function() {
		if(open === false) {
			$('#footerSlideContent').animate({ height: '300px' });
			$(this).css('backgroundPosition', 'bottom left');
			open = true;
		} else {
			$('#footerSlideContent').animate({ height: '0px' });
			$(this).css('backgroundPosition', 'top left');
			open = false;
		}
	});
});
