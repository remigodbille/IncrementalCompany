function Event(description, traitMutators) {
	this.description = description;
	this.traitMutators = traitMutators;
};

Event.prototype.trigger = function() {
	for (var i = 0, traitMutator; traitMutator = this.traitMutators[i]; i++) {
		traitMutator.execute();
	}
}