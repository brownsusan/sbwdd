$(document).on('mouseenter', '.project', function(event) {
	

	$(this).find('.project-details-container').fadeIn(400, function() {
		// Animation complete
	});
	$(this).find('.project-details-content').fadeIn(400, function() {
		// Animation complete
	});

	$(this).find('img').css({
		'-webkit-filter' : 'grayscale(100%)'
	});
});

$(document).on('mouseleave', '.project', function(event) {
	// $(this).find('.project-details-container').css({
		// display : 'none'
	// });
// 
	// $(this).find('.project-details-content').css({
		// display : 'none'
	// });
	
	$(this).find('.project-details-container').fadeOut("fast", function() {
		// Animation complete
	});
	
	$(this).find('.project-details-content').fadeOut("fast", function() {
		// Animation complete
	});

	$(this).find('img').css({
		'-webkit-filter' : 'none'
	});
});

