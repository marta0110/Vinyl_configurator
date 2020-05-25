"use strict"
/* get th slider value */

let slider = document.getElementById("myRange");
let output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
}

/* on click of vinyl size leave black bg */

let seven = document.querySelector(".seven");
let twelve = document.querySelector(".twelve");

seven.addEventListener("click", addImgSeven)
twelve.addEventListener("click", addImgTwelve)


function addImgSeven(){
	console.log("cudshs")
	 seven.style.backgroundImage = "url('css/images/7_hovered.png')";
	 twelve.style.backgroundImage = "url('css/images/12_nothovered.png')";
}

function addImgTwelve(){
	console.log("cudshs")
	 twelve.style.backgroundImage = "url('css/images/12_hovered.png')";
	 seven.style.backgroundImage = "url('css/images/7_nothovered.png')";
}