"use strict"
/*  CHANGE DATA IN CONFIGURATOR */
/*  vinyl amount */

let slider = document.getElementById("myRange");
let changeVinylAmount = document.querySelector(".vinyl_amount_order")


slider.oninput = function () {
	changeVinylAmount.innerHTML = this.value;
}

/* on click of Vinyl plate size leave black bg and change Vinyl size
img and headline in configurator*/

let seven = document.querySelector(".seven");
let twelve = document.querySelector(".twelve");
let vinylImage = document.querySelector(".vinyl_image")
let vinylSizeHeadline = document.querySelector(".headline_vinyl_size")
let rpm = document.querySelector(".rpm_tempo")

seven.addEventListener("click", addImgSeven)
twelve.addEventListener("click", addImgTwelve)


function addImgSeven() {
	console.log("cudshs")
	seven.style.backgroundImage = "url('css/images/7_hovered.png')";
	twelve.style.backgroundImage = "url('css/images/12_nothovered.png')";
	vinylImage.setAttribute('src', 'images/vinyl_7.png');
	vinylImage.style.padding = "80px 0";
	vinylSizeHeadline.innerHTML = "Single 7''";
	rpm.innerHTML = "45"
}

function addImgTwelve() {
	twelve.style.backgroundImage = "url('css/images/12_hovered.png')";
	seven.style.backgroundImage = "url('css/images/7_nothovered.png')";
	vinylImage.style.padding = "0";
	vinylImage.setAttribute('src', 'images/vinyl.png');
	vinylSizeHeadline.innerHTML = "Standard 12''";
	rpm.innerHTML = "33"
}

/* extra engravement */
let SpecificationDescriptionText = document.querySelector("#specification_description_text").textContent;

function addengravementText() {
	let engravementText = document.querySelector("#engravement");
	let specificationText = document.querySelector(".specification_description_text");
	let ShowengravementText = engravementText.value;
	specificationText.innerHTML = SpecificationDescriptionText  + "Engravement:" + ShowengravementText
	console.log(ShowengravementText);


	/* working on delete text on engravement*/
	engravementText.onkeydown = function deleteText() {
		let key = event.keyCode || event.charCode;
		if (key == 8 || key == 46)
		specificationText.innerHTML = SpecificationDescriptionText + "Engravement: None";
		console.log(SpecificationDescriptionText)
	}
}

/* weight upgrade */

let vinylWeight = document.querySelector(".vinyl_weight");
let weightYes = document.querySelector(".yes_weight_upgrade");
let weightNo = document.querySelector(".no_weight_upgrade");

weightYes.addEventListener("click", UpgradeWeight)
weightNo.addEventListener("click", StandardWeight)

function UpgradeWeight() {
	vinylWeight.innerHTML = "180";
}

function StandardWeight() {
	vinylWeight.innerHTML = "140";
}

/* Vinyl color change */
let VinylColorOne = document.querySelector(".color_one")
let VinylColorTwo = document.querySelector(".color_two")
let VinylColorThree = document.querySelector(".color_three")
let VinylColorFour = document.querySelector(".color_four")
let VinylColorFive = document.querySelector(".color_five")
let VinylColorSix = document.querySelector(".color_six")
let VinylColorSeven = document.querySelector(".color_seven")
let VinylColorEight = document.querySelector(".color_eight")
let VinylColorNine = document.querySelector(".color_nine")
let VinylColorTen = document.querySelector(".color_ten")
let VinylColorEleven = document.querySelector(".color_eleven")
let VinylColorTvelwe = document.querySelector(".color_tvelwe")

VinylColorOne.addEventListener("click", ChangeVinylImageOne)
VinylColorTwo.addEventListener("click", ChangeVinylImageTwo)
VinylColorThree.addEventListener("click", ChangeVinylImageThree)
VinylColorFour.addEventListener("click", ChangeVinylImageFour)
VinylColorFive.addEventListener("click", ChangeVinylImageFive)
VinylColorSix.addEventListener("click", ChangeVinylImageSix)
VinylColorSeven.addEventListener("click", ChangeVinylImageSeven)
VinylColorEight.addEventListener("click", ChangeVinylImageEight)
VinylColorNine.addEventListener("click", ChangeVinylImageNine)
VinylColorTen.addEventListener("click", ChangeVinylImageTen)
VinylColorEleven.addEventListener("click", ChangeVinylImageEleven)
VinylColorTvelwe.addEventListener("click", ChangeVinylImageTvelwe)

function ChangeVinylImageOne(){
vinylImage.setAttribute('src', 'images/vinyl.png');
	// VinylColorOne.style.backgroundColor = "#D3DBDA";
}

function ChangeVinylImageTwo(){
vinylImage.setAttribute('src', 'images/vinyl_plate2.png');
}
function ChangeVinylImageThree(){
vinylImage.setAttribute('src', 'images/color3.png');
}
function ChangeVinylImageFour(){
vinylImage.setAttribute('src', 'images/color4.png');
}
function ChangeVinylImageFive(){
vinylImage.setAttribute('src', 'images/color5.png');
}
function ChangeVinylImageSix(){
vinylImage.setAttribute('src', 'images/color6.png');
}
function ChangeVinylImageSeven(){
vinylImage.setAttribute('src', 'images/color7.png');
}
function ChangeVinylImageEight(){
vinylImage.setAttribute('src', 'images/color8.png');
}
function ChangeVinylImageNine(){
vinylImage.setAttribute('src', 'images/color9.png');
}
function ChangeVinylImageTen(){
vinylImage.setAttribute('src', 'images/color10.png');
}
function ChangeVinylImageEleven(){
vinylImage.setAttribute('src', 'images/color11.png');
}
function ChangeVinylImageTvelwe(){
vinylImage.setAttribute('src', 'images/color12.png');
}

/* radio buttons on click leave active */
let activeYesBox = document.querySelector(".yes-container");
let activeNoBox = document.querySelector(".no-container");
let yesOption = document.getElementById("Yes-option");
let noOption = document.getElementById("No-option");
let engravement = document.querySelector(".engravement");
let activeYesBoxWeight = document.querySelector(".yes-container-weight");
let activeNoBoxWeight = document.querySelector(".no-container-weight");
let yesOptionWeight = document.getElementById("Yes-option-weight");
let noOptionWeight = document.getElementById("No-option-weight");
let activeYesBoxColors = document.querySelector(".yes-container-colors");
let activeNoBoxColors = document.querySelector(".no-container-colors");
let yesOptionColors = document.getElementById("Yes-option-colors");
let noOptionColors = document.getElementById("No-option-colors");

let activeYesBoxQuantity = document.querySelector(".yes-container-press");
let activeNoBoxQuantity = document.querySelector(".no-container-press");
let yesOptionQuantity = document.getElementById("Yes-option-press");
let noOptionQuantity = document.getElementById("No-option-press");



yesOption.addEventListener("click", activeYes);
noOption.addEventListener("click", activeNo);

function activeYes() {
	activeYesBox.style.backgroundColor = "#D3DBDA"
	activeNoBox.style.backgroundColor = "#fff"
	engravement.style.display = 'block';
}

function activeNo() {
	activeNoBox.style.backgroundColor = "#D3DBDA"
	activeYesBox.style.backgroundColor = "#fff"
	engravement.style.display = 'none';
}


yesOptionWeight.addEventListener("click", activeYesWeight);
noOptionWeight.addEventListener("click", activeNoWeight);

function activeYesWeight() {
	activeYesBoxWeight.style.backgroundColor = "#D3DBDA"
	activeNoBoxWeight.style.backgroundColor = "#fff"

}

function activeNoWeight() {
	activeNoBoxWeight.style.backgroundColor = "#D3DBDA"
	activeYesBoxWeight.style.backgroundColor = "#fff"
}

yesOptionColors.addEventListener("click", activeYesColors);
noOptionColors.addEventListener("click", activeNoColors);

function activeYesColors() {
	activeYesBoxColors.style.backgroundColor = "#D3DBDA"
	activeNoBoxColors.style.backgroundColor = "#fff"

}

function activeNoColors() {
	activeNoBoxColors.style.backgroundColor = "#D3DBDA"
	activeYesBoxColors.style.backgroundColor = "#fff"
}

yesOptionQuantity.addEventListener("click", activeYesQuantity);
noOptionQuantity.addEventListener("click", activeNoQuantity);

function activeYesQuantity() {
	activeYesBoxQuantity.style.backgroundColor = "#D3DBDA"
	activeNoBoxQuantity.style.backgroundColor = "#fff"

}

function activeNoQuantity() {
	activeNoBoxQuantity.style.backgroundColor = "#D3DBDA"
	activeYesBoxQuantity.style.backgroundColor = "#fff"
}
