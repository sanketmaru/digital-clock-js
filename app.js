function Clock(currentHours, currentMinutes, currentSeconds){
	this.clockTimer = new ClockTimer(currentHours, currentMinutes, currentSeconds);
};


Clock.prototype.start = function start(){
	this.incrementSeconds();
};

Clock.prototype.pause = function pause(){
	this.clearInterval(this.asyncClockTimer);
};

Clock.prototype.incrementSeconds = function incrementSeconds(){

	this.asyncClockTimer = setInterval(function(){

		this.checkConditions();

	}.bind(this), 1000);

};

Clock.prototype.checkConditions = function checkConditions(){

	if(this.clockTimer.checkHours()){
		this.clockTimer.resetHours();
	}

	if(this.clockTimer.checkMinutes()){
		this.clockTimer.resetMinutes();
		this.clockTimer.incrementHours();
	}

	if(this.clockTimer.checkSeconds()){
		this.clockTimer.resetSeconds();
		this.clockTimer.incrementMinutes();
	}

	this.clockTimer.incrementSeconds();

};

Clock.prototype.getTime = function getTime(){
	return this.clockTimer.getCurrentTime();
};

function ClockTimer(currentHours, currentMinutes, currentSeconds){
	this.currentSeconds = currentSeconds || 0;
	this.currentMinutes = currentMinutes || 0;
	this.currentHours = currentHours || 0;
	this.maxSeconds = 60;
	this.maxMinutes = 60;
	this.maxHours = 12;

};

ClockTimer.prototype.checkSeconds = function(){
	return this.currentSeconds === this.maxSeconds;
};

ClockTimer.prototype.resetSeconds = function resetSeconds(){
	this.currentSeconds = 0;
};

ClockTimer.prototype.incrementSeconds = function incrementSeconds(){
	++this.currentSeconds;
};

ClockTimer.prototype.checkMinutes = function(){
	return this.currentMinutes === this.maxMinutes;
};

ClockTimer.prototype.resetMinutes = function resetMinutes(){
	this.currentMinutes = 0;
};

ClockTimer.prototype.incrementMinutes = function incrementMinutes(){
	++this.currentMinutes;
};

ClockTimer.prototype.checkHours = function(){
	return this.currentHours == this.maxHours;
};

ClockTimer.prototype.resetHours = function resetHours(){
	this.currentHours = 0;
};

ClockTimer.prototype.incrementHours = function incrementHours(){
	++this.currentHours;
};

ClockTimer.prototype.getCurrentTime = function getCurrentTime(){
	return this.currentHours + " " + this.currentMinutes + " " + this.currentSeconds;
};


(function(){
	var c = new Clock(1, 59, 56);
	var displayTime = c.start();
	setInterval(function(){
		console.log(c.getTime());
	}, 1000);
})();
