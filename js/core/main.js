$(document).ready(function(){
	resizeImage();
});

$(window).resize(function() {
	resizeImage();
});

var resizeImage = function(){
	//Need to reset css here when the window is scaled back up past the media queries
	var projectImageWidth = $('.project img').width();
	$('.project img').height(projectImageWidth);
	$('.project-details-container').width(projectImageWidth);
	$('.project-details-container').height(projectImageWidth);
};

// $('.process').find('h3').arctext({
	// radius : 100,
	// dir : -1
// });
