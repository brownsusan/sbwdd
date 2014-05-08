// $('.process').find('h3').arctext({
	// radius : 100,
	// dir : -1
// });

$(document).on('mouseenter', '.project', function(event) {
	$(this).find('.project-details-container').css({
		display : 'block'
	});
	$(this).find('.project-details-content').css({
		display : 'block'
	});

	$(this).find('img').css({
		'-webkit-filter' : 'blur(20px) grayscale(50%)'
	});
});

$(document).on('mouseleave', '.project', function(event) {
	$(this).find('.project-details-container').css({
		display : 'none'
	});
	$(this).find('.project-details-content').css({
		display : 'block'
	});

	$(this).find('img').css({
		'-webkit-filter' : 'none'
	});
});

