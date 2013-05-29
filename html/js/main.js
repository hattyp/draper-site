
$(document).ready(function() {

	// randomise background image
	var images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg', 'bg_4.jpg'];
	var background = $('body').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')', '-webkit-background-size': 'cover',
	'-moz-background-size': 'cover', '-o-background-size': 'cover',	'background-size': 'cover'});
	 $.backstretch(background);
	
  
  
  var $container = $('#container'),
      $items = $('.item');
  
  $container.isotope({
    itemSelector: '.item',
    masonry: {
      columnWidth: 55
    },
    getSortData : {
      selected : function( $item ){
        // sort by selected first, then by original order
        return ($item.hasClass('selected') ? -1000 : 0 ) + $item.index();
      }
    },
    sortBy : 'selected'
  })
  
  $items.click(function(){
    var $this = $(this);
    // don't proceed if already selected
    var $previousSelected = $('.selected');
    if ( !$this.hasClass('selected') ) {
      $this.addClass('selected');
    }
    
    $previousSelected.removeClass('selected');

    // update sortData for new items size
    $container
      .isotope( 'updateSortData', $this )
      .isotope( 'updateSortData', $previousSelected )
      .isotope();
    
  });


	// remove border on last twitter item
	$('#twitter_update_list li:last-child').addClass("last-item");
});