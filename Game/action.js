function Action(name, duration, events) {
	this.name = name;
	this.duration = duration;
	this.events = events;
};

Action.prototype.execute = function(time) {
	var events = this.events[time];
	console.log(events);
}