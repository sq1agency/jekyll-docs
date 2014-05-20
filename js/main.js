$(document).ready(function() {
	$('.nav-list').on('click', 'li.title', function(e) {
		e.preventDefault();
		$('.dropdown').slideUp('slow');
		$(this).next('.dropdown').slideToggle('slow');
	});
});