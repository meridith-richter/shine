function info(name){
	window.open("locations/"+name+".html", name, "height = 600, width = 650");
}

function displayOn(name){
	document.getElementById("map").src = "assets/hand_world_"+name+".png";
}

function displayOff(){
	document.getElementById("map").src = "assets/hand_world_image_map.png";
}

//event listeners for each image map segment
document.getElementById("info").addEventListener("click", function(event){
		event.preventDefault()
		window.open("welcome.html", "SHINE", "height = 600, width = 650");  
});

document.getElementById("boulder").addEventListener("click", function(event){
		event.preventDefault()
		info("boulder")
});
document.getElementById("boulder").addEventListener("mouseover", function(event){
		event.preventDefault()
		displayOn("boulder")
});
document.getElementById("boulder").addEventListener("mouseout", function(event){
		event.preventDefault()
		displayOff()
});

document.getElementById("new_york").addEventListener("click", function(event){
		event.preventDefault()
		info("new_york")
});
document.getElementById("new_york").addEventListener("mouseover", function(event){
		event.preventDefault()
		displayOn("new_york")
	});
document.getElementById("new_york").addEventListener("mouseout", function(event){
		event.preventDefault()
		displayOff()
	});

document.getElementById("connecticut").addEventListener("click", function(event){
		event.preventDefault()
	info("connecticut")
});
document.getElementById("connecticut").addEventListener("mouseover", function(event){
		event.preventDefault()
		displayOn("connecticut")
	});
document.getElementById("connecticut").addEventListener("mouseout", function(event){
		event.preventDefault()
		displayOff()
	});
document.getElementById("tuba_city").addEventListener("click", function(event){
		event.preventDefault()
		info("tuba_city")
});
document.getElementById("tuba_city").addEventListener("mouseover", function(event){
		event.preventDefault()
		displayOn("tuba_city")
	});
document.getElementById("tuba_city").addEventListener("mouseout", function(event){
		event.preventDefault()
		displayOff()
	});
document.getElementById("new_orleans").addEventListener("click", function(event){
		event.preventDefault()
		info("new_orleans")
});
document.getElementById("new_orleans").addEventListener("mouseover", function(event){
		event.preventDefault()
		displayOn("new_orleans")
	});
document.getElementById("new_orleans").addEventListener("mouseout", displayOff);

document.getElementById("london").addEventListener("click", function(event){
		event.preventDefault()
		info("london")
});
document.getElementById("london").addEventListener("mouseover", function(event){
		event.preventDefault()
		displayOn("london")
	});
document.getElementById("london").addEventListener("mouseout", function(event){
		event.preventDefault()
		displayOff()
	});

document.getElementById("south_africa").addEventListener("click", function(event){
		event.preventDefault()
		info("south_africa")
});
document.getElementById("south_africa").addEventListener("mouseover", function(event){
		event.preventDefault()
		displayOn("south_africa")
	});
document.getElementById("south_africa").addEventListener("mouseout", function(event){
		event.preventDefault()
		displayOff()
	});