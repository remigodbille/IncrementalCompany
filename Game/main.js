setView("self");

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
}