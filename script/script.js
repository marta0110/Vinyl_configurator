/* FETCH DATA FROM	 WP */

let aboutTemplate = document.querySelector("#hot_deals").content;
let aboutList = document.querySelector("#hot_deals_slideshow");
let aboutPage = 1;
let lookingForData = !1;
let slideIndex = 0;


function fetchAbout() {
	let a = new URLSearchParams(window.location.search),
		b = a.get("category"),
		c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/Vinyls?per_page=4" + aboutPage;
	b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/Vinyls?per_page=4" + aboutPage + "&categories=" + b), fetch(c).then(function (d) {
		return d.json()
	}).then(showAbout)
}

function showAbout(a) {
	console.log(a), lookingForData = !1, a.forEach(showData)
	showSlides(slideIndex)
	setInterval(function () {
		showSlides(slideIndex);
		slideIndex++;
	}, 5000);
}

function showData(a) {

	var b = aboutTemplate.cloneNode(!0);
	b.querySelector(".header_slideshow").textContent = a.title.rendered;
	b.querySelector(".paragraph").textContent = a.content.rendered;
	b.querySelector("#price").textContent = a.acf.vinyl_hot_deals;
	b.querySelector(".img").setAttribute("src", a.acf.image.url);

	aboutList.appendChild(b);
	dotHandler()
}

fetchAbout();


/* SLIDESHOW */
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	const dots = document.querySelectorAll(".dot");
	let highlight = document.querySelector(".Highlight");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

function dotHandler() {
	const sliders = document.querySelectorAll(".mySlides")
	sliders.forEach((slide, i) => {
		const dots = slide.querySelectorAll(".dot");
		dots[i].style.background = '#000';
	})
}


//	CLICK ON ACTIVE SLIDE CODE 

// for (let i = 0; i < dots.length; i++) {
// dots[i].addEventListener("click", function() {
// let current = document.getElementsByClassName("active");
// if (current.length > 0) { 
// current[0].className = current[0].className.replace("     	highlight_dot", "");
// }
// this.className += " highlight_dot";
//   });
// } 

