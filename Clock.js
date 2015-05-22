function Clock(){
	this.currentSeconds = 0;
	this.currentMinutes = 0;
	this.currentHours = 0;
};


Clock.prototype.start = function(){
	return this.incrementSeconds();
};

Clock.prototype.pause = function(){

};

Clock.prototype.incrementSeconds = function(){

	this.clockTimer = setInterval(function(){

		++this.currentSeconds;

	}, 1000)
	return {
		seconds: this.currentSeconds;
	}
};
