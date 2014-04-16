$(document).ready(function(){

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');

	$('.container').append(outerShell);
	outerShell.append(innerShell);

});