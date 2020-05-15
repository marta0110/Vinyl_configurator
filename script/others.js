"Let's encrypt"
"use strict"
/* hover effects on previous elements in DOM */
function Unactive() {
document.getElementById("MediaProducts").style.borderBottom = "none";
}
function Active() {
 document.getElementById("MediaProducts").style.fontWeight = "600";
document.getElementById("MediaProducts").style.borderBottom = "4px solid #EB5D1B";

}
function UnactiveSubheader() {
 document.getElementById("VinylSubheader").style.fontWeight = "400";

}
function ActiveSubheader() {
 document.getElementById("VinylSubheader").style.fontWeight = "600";

}
function ButtonEffect() {
 document.getElementById("price").style.color = "#000";
document.getElementById("price").style.backgroundPosition ="right bottom"
document.getElementById("price").style.backgroundcolor ="#fff"
document.getElementById("price").style.border = "1px solid #000";
}

function ButtonEffectOut() {
 document.getElementById("price").style.color = "#fff";
document.getElementById("price").style.backgroundPosition ="left bottom"
document.getElementById("price").style.backgroundcolor ="#000"
document.getElementById("price").style.border = "none";
}
