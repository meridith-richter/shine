window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    window.open("welcome.html", "SHINE", "height = 600, width = 600");  
},false);
//BOULDER SEEC onClick function for link to content once region has been clicked (open new window?)
function onMouseClickBoulder(){
	//open window with content for location
	window.open("locations/boulder.html", "BOULDER LOCATIONS", "height = 600, width = 600");

}

//onMouseEnter function for scroll over
function onMouseEnterBoulder(){
	//highlight the map element with color on mouse entry
	document.getElementById("map").src = "assets/hand_world_boulder.png";
}

//onMouseLeave function for scroll out
function onMouseLeaveBoulder(){
	//return to normal on mouse exit
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//CONNECTICUT onClick function for link to content once region has been clicked (open new window?)
function onMouseClick4(){
	//open window with content for location
	window.open("locations/connecticut.html", "BROOKFIELD, CT", "height = 600, width = 600");

}

//onMouseEnter function for scroll over
function onMouseEnter4(){
	//highlight the map element with color on mouse entry
	document.getElementById("map").src = "assets/hand_world_con.png";
}

//onMouseLeave function for scroll out
function onMouseLeave4(){
	//return to normal on mouse exit
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//NEW YORK onClick function for link to content once region has been clicked (open new window?)
function onMouseClick5(){
	//open window with content for location
	window.open("locations/new_york.html", "NEW YORK, NY", "height = 600, width = 600");

}

//onMouseEnter function for scroll over
function onMouseEnter5(){
	//highlight the map element with color on mouse entry
	document.getElementById("map").src = "assets/hand_world_ny.png";
}

//onMouseLeave function for scroll out
function onMouseLeave5(){
	//return to normal on mouse exit
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//NEW ORLEANS onClick function for link to content once region has been clicked (open new window?)
function onMouseClick6(){
	//open window with content for location
	window.open("locations/new_orleans.html", "NEW ORLEANS, LA", "height = 600, width = 600");

}

//onMouseEnter function for scroll over
function onMouseEnter6(){
	//highlight the map element with color on mouse entry
	document.getElementById("map").src = "assets/hand_world_no.png";
}

//onMouseLeave function for scroll out
function onMouseLeave6(){
	//return to normal on mouse exit
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//SOUTH AFRICA onClick function for link to content once region has been clicked (open new window?)
function onMouseClick7(){
	//open window with content for location
	window.open("locations/south_africa.html", "SOUTH AFRICA", "height = 600, width = 600");

}

//onMouseEnter function for scroll over
function onMouseEnter7(){
	//highlight the map element with color on mouse entry
	document.getElementById("map").src = "assets/hand_world_sa.png";
}

//onMouseLeave function for scroll out
function onMouseLeave7(){
	//return to normal on mouse exit
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//LONDON onClick function for link to content once region has been clicked (open new window?)
function onMouseClick8(){
	//open window with content for location
	window.open("locations/london.html", "LONDON, ENGLAND", "height = 600, width = 600");

}

//onMouseEnter function for scroll over
function onMouseEnter8(){
	//highlight the map element with color on mouse entry
	document.getElementById("map").src = "assets/hand_world_lon.png";
}

//onMouseLeave function for scroll out
function onMouseLeave8(){
	//return to normal on mouse exit
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//onMouseEnter function for scroll over
function onMouseEnter9(){
	//highlight the map element with color on mouse entry
	document.getElementById("map").src = "assets/hand_world_tc.png";
}

//onMouseLeave function for scroll out
function onMouseLeave9(){
	//return to normal on mouse exit
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//handlers for first
document.getElementById("image1").addEventListener("click", onMouseClick1);
document.getElementById("image1").addEventListener("mouseover", onMouseEnter1);
document.getElementById("image1").addEventListener("mouseout", onMouseLeave1);

//handlers for second
document.getElementById("image2").addEventListener("click", onMouseClick2);
document.getElementById("image2").addEventListener("mouseover", onMouseEnter2);
document.getElementById("image2").addEventListener("mouseout", onMouseLeave2);

//handlers for third
document.getElementById("image3").addEventListener("click", onMouseClick3);
document.getElementById("image3").addEventListener("mouseover", onMouseEnter3);
document.getElementById("image3").addEventListener("mouseout", onMouseLeave3);

//handlers for fourth
document.getElementById("image4").addEventListener("click", onMouseClick4);
document.getElementById("image4").addEventListener("mouseover", onMouseEnter4);
document.getElementById("image4").addEventListener("mouseout", onMouseLeave4);

//handlers for fifth
document.getElementById("image5").addEventListener("click", onMouseClick5);
document.getElementById("image5").addEventListener("mouseover", onMouseEnter5);
document.getElementById("image5").addEventListener("mouseout", onMouseLeave5);

//handlers for sixth
document.getElementById("image6").addEventListener("click", onMouseClick6);
document.getElementById("image6").addEventListener("mouseover", onMouseEnter6);
document.getElementById("image6").addEventListener("mouseout", onMouseLeave6);

//handlers for seventh
document.getElementById("image7").addEventListener("click", onMouseClick7);
document.getElementById("image7").addEventListener("mouseover", onMouseEnter7);
document.getElementById("image7").addEventListener("mouseout", onMouseLeave7);

//handlers for eighth
document.getElementById("image8").addEventListener("click", 
function(event){
   	event.preventDefault()
   	onMouseClick8()
});
//document.getElementById("image8").addEventListener("click", onMouseClick8);


document.getElementById("image8").addEventListener("mouseover", onMouseEnter8);
document.getElementById("image8").addEventListener("mouseout", onMouseLeave8);