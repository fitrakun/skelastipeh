$( document ).ready(function() {
	$('.dropdown-toggle').dropdown();
	$('.collapsemenu-header').on('click', function(e){
		e.stopPropagation();
		$('#side-nav-loggedin').addClass('zeroleft');
	});
	$('#side-nav-loggedin').click(function(e){
		e.stopPropagation();
	});
	$('body,html').click(function(e){
		$('#side-nav-loggedin').removeClass('zeroleft');
	});
});