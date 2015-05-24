function Clock(currentHours, currentMinutes, currentSeconds){
	this.currentSeconds = currentSeconds || 0;
	this.currentMinutes = currentMinutes || 0;
	this.currentHours = currentHours || 0;
	this.maxSeconds = 59;
	this.maxMinutes = 59;
	this.maxHours = 11;
};


Clock.prototype.start = function(){
	this.incrementSeconds();
};

Clock.prototype.pause = function(){
	this.clearInterval(this.clockTimer);
};

Clock.prototype.incrementSeconds = function(){
	var self = this;
	this.clockTimer = setInterval(function(){

		if(this.currentSeconds === this.maxSeconds){

			if(this.currentMinutes === this.maxMinutes){

				if(this.currentHours === this.maxHours){
					this.currentHours = 0;
				}

				++this.maxHours;

			}
			this.currentSeconds = 0;
			++this.currentMinutes;
		}
		++this.currentSeconds;

	}.bind(this), 1000);

};

Clock.prototype.getTime = function(){
	return this.currentHours + " " + this.currentMinutes + " " + this.currentSeconds;
};


(function(){
	var c = new Clock(0, 0, 50);
	var displayTime = c.start();
	setInterval(function(){
		console.log(c.getTime());
	}, 1000);
})();
