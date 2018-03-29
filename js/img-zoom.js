$(function() {
    	$('.img-zoom').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});


//start modal script. remove this is no start modal
$(window).load(function(){
         $('#startModal').modal('show');
});
//strat modal ends-->

