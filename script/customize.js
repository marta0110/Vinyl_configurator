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

/* radio buttons on click leave active */
let activeYesBox = document.querySelector(".yes-container");
let activeNoBox = document.querySelector(".no-container");
let yesOption = document.getElementById("Yes-option");
let noOption  = document.getElementById("No-option");
let engravement = document.querySelector(".engravement");
let activeYesBoxWeight = document.querySelector(".yes-container-weight");
let activeNoBoxWeight = document.querySelector(".no-container-weight");
let yesOptionWeight = document.getElementById("Yes-option-weight");
let noOptionWeight  = document.getElementById("No-option-weight");
let activeYesBoxColors = document.querySelector(".yes-container-colors");
let activeNoBoxColors = document.querySelector(".no-container-colors");
let yesOptionColors = document.getElementById("Yes-option-colors");
let noOptionColors  = document.getElementById("No-option-colors");

let activeYesBoxQuantity = document.querySelector(".yes-container-press");
let activeNoBoxQuantity = document.querySelector(".no-container-press");
let yesOptionQuantity = document.getElementById("Yes-option-press");
let noOptionQuantity  = document.getElementById("No-option-press");



yesOption.addEventListener("click", activeYes);
noOption.addEventListener("click", activeNo);

function activeYes(){
	activeYesBox.style.backgroundColor = "#D3DBDA"
		activeNoBox.style.backgroundColor = "#fff"
	 engravement.style.display ='block';
}

function activeNo(){
	activeNoBox.style.backgroundColor = "#D3DBDA"
	activeYesBox.style.backgroundColor = "#fff"
	 engravement.style.display ='none';
}


yesOptionWeight.addEventListener("click", activeYesWeight);
noOptionWeight.addEventListener("click", activeNoWeight);

function activeYesWeight(){
activeYesBoxWeight.style.backgroundColor = "#D3DBDA"
activeNoBoxWeight.style.backgroundColor = "#fff"

}

function activeNoWeight(){
	activeNoBoxWeight.style.backgroundColor = "#D3DBDA"
	activeYesBoxWeight.style.backgroundColor = "#fff"
}

yesOptionColors.addEventListener("click", activeYesColors);
noOptionColors.addEventListener("click", activeNoColors);

function activeYesColors(){
activeYesBoxColors.style.backgroundColor = "#D3DBDA"
activeNoBoxColors.style.backgroundColor = "#fff"

}

function activeNoColors(){
	activeNoBoxColors.style.backgroundColor = "#D3DBDA"
	activeYesBoxColors.style.backgroundColor = "#fff"
}

yesOptionQuantity.addEventListener("click", activeYesQuantity);
noOptionQuantity.addEventListener("click", activeNoQuantity);

function activeYesQuantity(){
activeYesBoxQuantity.style.backgroundColor = "#D3DBDA"
activeNoBoxQuantity.style.backgroundColor = "#fff"

}

function activeNoQuantity(){
	activeNoBoxQuantity.style.backgroundColor = "#D3DBDA"
	activeYesBoxQuantity.style.backgroundColor = "#fff"
}

