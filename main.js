$(document).ready(function(){

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');

	$('.container').append(outerShell);
	outerShell.append(innerShell);

	var pmLabel = $('<p class="pm-label">PM</p>');
	var autoLabel = $('<p class="auto-label">AUTO</p>');
	var clockScreen = $('<div class="clock-screen"></div>');

	innerShell.append(pmLabel);
	innerShell.append(autoLabel);
	innerShell.append(clockScreen);

	var indicator = $('<div class="indicator"></div>');
	var clockText = $('<p class="clock-text">12:17</p>');

	clockScreen.append(indicator);
	clockScreen.append(clockText);

	var amLabel = $('<p class="am-label">AM</p>');
	var amFreq = $('<p class="am-freq">53 60 70 90 110 140 170    KHz</p>');
	var fmLabel = $('<p class="fm-label">FM</p>');
	var fmFreq = $('<p class="fm-freq">88 92 96 102 106 108     MHz</p>');

	innerShell.append(amLabel);
	innerShell.append(amFreq);
	innerShell.append(fmLabel);
	innerShell.append(fmFreq);

});