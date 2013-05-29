
$(document).ready(function() {

	// randomise background image
	var images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg', 'bg_4.jpg'];
	var background = $('body').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')', '-webkit-background-size': 'cover',
	'-moz-background-size': 'cover', '-o-background-size': 'cover',	'background-size': 'cover'});
	 $.backstretch(background);
	
	$('#container').isotope({
	  // options
	  itemSelector : '.item',
	  layoutMode : 'fitRows',
	  animationEngine: 'best-available'
	});
	
	$('.content').draggable().resizable();

	// remove border on last twitter item
	$('#twitter_update_list li:last-child').addClass("last-item");
});