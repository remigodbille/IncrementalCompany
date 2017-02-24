function Trait(name) {
	this.name = name;
	this.level = 0;
	this.amount = 0;
	this.computeMax();
}

Trait.prototype.computeMax = function() {
	this.max = Math.pow(10, this.level + 1);
};

Trait.prototype.levelUp = function() {
	this.level++;
	this.amount = 0;
	this.computeMax();
};

Trait.prototype.earn = function(amount) {
	this.amount += amount;
	
	if (this.amount > this.max) {
		this.levelUp();
	}
};

function TraitMutator(trait, amount) {
	this.trait = trait;
	this.amount = amount;
}

TraitMutator.prototype.execute = function() {
	this.trait.earn(this.amount);
};