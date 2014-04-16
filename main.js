$(document).ready(function(){

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');

	$('.container').append(outerShell);
	outerShell.append(innerShell);

	var labelContainer = $('<div class="label-container"></div>')
	var clockScreen = $('<div class="clock-screen"></div>');

	// innerShell.append(pmLabel);
	// innerShell.append(autoLabel);
	innerShell.append(labelContainer);
	innerShell.append(clockScreen);

	var pmLabel = $('<p class="pm-label">PM</p>');
	var autoLabel = $('<p class="auto-label">AUTO</p>');

	labelContainer.append(pmLabel);
	labelContainer.append(autoLabel);

	var pmIndicator = $('<div class="indicator pm-indicator"></div>');
	var clockText = $('<p class="clock-text">12:00</p>');
	var time = function(){
		var d = new Date();
		var t = d.toLocaleTimeString();
		arr = t.split(':');
		clockText.text(arr[0] + ':' + arr[1]);
		if(arr[2].indexOf('PM') !== -1){
			pmIndicator.show();
		}
		else{
			pmIndicator.hide();
		}
	}
	time();
	var currTime = setInterval(function(){time()}, 1000);;
	var indicator = $('<div class="indicator"></div>');

	clockScreen.append(indicator);
	clockScreen.append(pmIndicator);
	clockScreen.append(clockText);

	var amContainer = $('<div class="am-container"></div>');
	var fmContainer = $('<div class="fm-container"></div>');

	innerShell.append(amContainer);
	innerShell.append(fmContainer);

	var amLabel = $('<p class="am-label">AM</p>');
	var amFreq = $('<p class="am-freq">53 60 70 90 110 140 170    KHz</p>');
	var fmLabel = $('<p class="fm-label">FM</p>');
	var fmFreq = $('<p class="fm-freq">88 92 96 102 106 108     MHz</p>');

	amContainer.append(amLabel);
	amContainer.append(amFreq);
	fmContainer.append(fmLabel);
	fmContainer.append(fmFreq);

});