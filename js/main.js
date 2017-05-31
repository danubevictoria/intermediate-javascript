// http://codifyacademy.com/wk12/
// 3
var numArray = [1.14, 2.05, 3.65, 4.35, 5.56];

// 4
var resultArray = [];

for (var i = 0; i < numArray.length; i++) {
	resultArray[i] = Math.round(numArray[i]);
}

console.log(resultArray);

// 5
var randomArr = [];

function getRandom(min, max) {
	var trueMin = Math.ceil(min);
	var trueMax = Math.floor(max);
	return Math.floor(Math.random() * (trueMax - trueMin));
}

function addRandom() {
	for (var i = 0; i < 10; i++) {
		randomArr[i] = getRandom(1, 100);
	}
	return randomArr;
}

console.log(addRandom());

// 6
var today = new Date();

function CurrentDate(month, day, year){
	this.month = month + 1;
	this.day = day;
	this.year = year;
	this.now = function() {
		return this.month + '/' + this.day + '/' + this.year;
	}
}

function CurrentTime(hours, min, sec){
	this.hours = hours;
	this.min = min;
	this.sec = sec;
	this.now = function() {
		return ("0" + this.hours).slice(-2) + ':' + ("0" + this.min).slice(-2) + ':' + ("0" + this.sec).slice(-2);
	}
}

function CurrentDateAndTime(date, time){
	this.date = date;
	this.time = time;
	this.now = function() {
		return date.now() + ' ' + time.now();
	}	
} 

// 10
function getToday() {
	var currentDate = new CurrentDate(today.getMonth(), today.getDate(), today.getFullYear());
	var currentTime = new CurrentTime(today.getHours(), today.getMinutes(), today.getSeconds());
	console.log(currentDate.now() + ' ' + currentTime.now());
	var todaysDate = new CurrentDateAndTime(currentDate.now(), currentTime.now());
	return todaysDate;
}

function runEverySec() {
	setTimeout(function() {
		getToday();
		runEverySec();
	}, 1000)
}

setTimeout(function () {
	runEverySec()
}, 1000)

// 11
// HTML event handlers are called using html event tags such as onload, onclick from html elements
// function htmlEvent() {
// 	alert(getToday());
// }

// 12
// DOM event handlers are called from saving html elements in vars and calling javascript functions from the vars
var body = document.getElementById('body');

// function domEvent() {
// 	alert(getToday());
// }

// // don't need to add parens after domEvent because adding parens means you will call the function to run, and in this case we just want to set the onload variable
// body.onload = domEvent;

// 13
// Preferred way to use event listeners
// function domEventListener() {	
// 	var formattedToday = getToday();
// 	alert(today.getFullYear());
// }

// // addEventListener attaches an event handler to the specified element
// // https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// body.addEventListener('onload', domEventListener, false)