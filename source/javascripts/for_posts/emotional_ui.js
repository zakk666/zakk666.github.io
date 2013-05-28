
$(document).ready(function(){

	$('.emotional-ui-section-title').waypoint({
	
		handler: function(direction){
			
			if (direction == 'down') {
				alert($(this).html())	;
			}
		},

		offset: '50%'

	});

});
