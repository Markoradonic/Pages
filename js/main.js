function layoutHandler(){
	var styleLink = document.getElementById("pagestyle");
	if(window.innerWidth < 900){
		styleLink.setAttribute("href", "mobile.css");
	} else if(window.innerWidth < 1200){
		styleLink.setAttribute("href", "medium.css");
	} else {
	    styleLink.setAttribute("href", "large.css");
	}
}
window.onresize = layoutHandler;
layoutHandler();

document.getElementById('dugme').onclick = function() {
   alert("button was clicked");
};