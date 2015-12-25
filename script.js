var switch1Count = 0;
var bulb4Count = 0;
var switchesCount = [0, 0, 0];
$(document).ready(function() {
	$("#switch1").click(function() {
		switch1Count++;
		resetAllBulbs();
		if (switch1Count % 6 === 5 || switch1Count % 6 === 1) {
			onBulb(1);
		}
		if (switch1Count % 6 === 4 || switch1Count % 6 === 2) {
			onBulb(2);
		}
		if (switch1Count % 6 === 3) {
			onBulb(3);
		}
		changeSwitch(1, switch1Count % 2 === 1);
		$("#swich1Count").text(switch1Count);
	});
	$("#switch2").click(function () {
		bulb4action(0);
	});
	$("#switch3").click(function () {
		bulb4action(1);
	});
	$("#switch4").click(function () {
		bulb4action(2);
	});
});

function resetAllBulbs() {
	var src = "./img/bulb-off.svg"
	$("#bulb1").attr("src", src);
	$("#bulb2").attr("src", src);
	$("#bulb3").attr("src", src);
}

function onBulb(n) {
	var src = "./img/bulb-on.svg"
	var id = "#bulb"+n;
	$(id).attr("src", src);
}

function changeSwitch(n, onBool) {
	var id = "#switch"+n;
	if (onBool) {
		var src = "./img/switch-on.svg"
	}
	else {
		var src = "./img/switch-off.svg"
	}
	$(id).attr("src", src);
}

function bulb4action(n) {
	switchesCount[n]++;
	bulb4Count++;
	changeSwitch(n+2, switchesCount[n]%2 === 1);
	if(bulb4Count % 2 === 1) {
		var src = "./img/bulb-on.svg"
	}
	else {
		var src = "./img/bulb-off.svg"
	}
	$("#bulb4").attr("src", src);
	$("#bulb4Count").text(bulb4Count);
}