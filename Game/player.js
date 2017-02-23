function Player() {
	this.inspiration = 0;
	this.knowledge = 0;
	this.skill = 0;
	this.burnout = 0;
	this.tiredness = 0;
};

Player.prototype.restUp = function() {
	this.tiredness--;
}

Player.prototype.goToSchool = function() {
	this.knowledge++;
	this.burnout++;
	this.tiredness++;
}

Player.prototype.partyHard = function() {
	this.burnout--;
	this.tiredness++;
}