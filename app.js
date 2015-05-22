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
	var self = this;
	this.clockTimer = setInterval(function(){
		++self.currentSeconds;
		console.log("In Increment Seconds" + self.currentSeconds);
	}, 1000);

	return {
		seconds: this.currentSeconds
	}
};

Clock.prototype.getTime = function(){
	return this.currentSeconds;
};


(function(){
	var c = new Clock();
	var displayTime = c.start();
	setInterval(function(){
		console.log(c.getTime());
	}, 0);
})();
