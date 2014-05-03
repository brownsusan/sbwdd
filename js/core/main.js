$(document).on('mouseenter', '.project', function(event){
	$(this).find('.project-details').css({
		display: 'block'
	})
});

$(document).on('mouseleave', '.project', function(event){
	$(this).find('.project-details').css({
		display: 'none'
	})
});
