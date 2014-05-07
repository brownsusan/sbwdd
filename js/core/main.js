$(document).ready(function() {
	$('.process').find('h3').circleType({
		'radius' : 384,
		'fluid' : true
	});
});

$(document).on('mouseenter', '.project', function(event) {
	$(this).find('.project-details').css({
		display : 'block'
	});

	$(this).find('img').css({
		'-webkit-filter' : 'blur(3px) grayscale(50%)'
	});
});

$(document).on('mouseleave', '.project', function(event) {
	$(this).find('.project-details').css({
		display : 'none'
	});

	$(this).find('img').css({
		'-webkit-filter' : 'none'
	});
});

