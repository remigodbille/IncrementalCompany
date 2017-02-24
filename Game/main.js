/*setView("self");

var menu = document.getElementsByTagName("nav")[0];
menu.addEventListener(
	"click",
	function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var destination = e.target;
		setView(destination.dataset.view);
	},
	true
);

function setView(view) {
	var views = document.getElementsByClassName("view");
	var displayed_view = document.getElementById(view);
	
	for (var i = 0; i < views.length; i++) {
		views[i].style.display = "none";
	}
	
	displayed_view.style.display = "block";
}*/

var inspiration = new Trait("inspiration");
var fatigue = new Trait("fatigue");

var inspirationMutator = new TraitMutator(inspiration, 1);
var fatigueMutator = new TraitMutator(fatigue, 2);

var bonneNuit = new Event("Vous dormez bien", [inspirationMutator, fatigueMutator]);
bonneNuit.trigger();

console.log(inspiration.amount);
console.log(fatigue.amount);

var you = new Player();

var action_buttons = document.getElementsByClassName("action");

for (var i = 0; i < action_buttons.length; i++) {
	action_buttons[i].addEventListener("click", actionHandler, false);
}

function actionHandler() {
	var action = this.id;
	
	switch(action) {
		case "rest":
			you.restUp();
			break;
		
		case "school":
			you.goToSchool();
			break;
		
		case "party":
			you.partyHard();
			break;
		
		default:
			console.log("Rien ne se passe ...");
			break;
	}
	
	var inspiration = document.getElementById("inspiration");
	var knowledge = document.getElementById("knowledge");
	var skill = document.getElementById("skill");
	var burnout = document.getElementById("burnout");
	var tiredness = document.getElementById("tiredness");
	
	inspiration.value = you.inspiration;
	knowledge.value = you.knowledge;
	skill.value = you.skill;
	burnout.value = you.burnout;
	tiredness.value = you.tiredness;
}