

/* FETCH DATA FROM	 WP */

let aboutTemplate = document.querySelector("#hot_deals").content;
let aboutList = document.querySelector("#hot_deals_slideshow");
let  aboutPage = 1;
let  lookingForData = !1;
let slideIndex = 0;


function fetchAbout() {
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/Vinyls?per_page=4" + aboutPage;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/Vinyls?per_page=4" + aboutPage + "&categories=" + b), fetch(c).then(function(d) {
        return d.json()
    }).then(showAbout)
}
function showAbout(a) {
    console.log(a), lookingForData = !1, a.forEach(showData)
	showSlides(slideIndex)
	setInterval(function(){
		showSlides(slideIndex);
		slideIndex++;
	//	console.log(slideIndex);
	}, 5000);
	// setTimeout(showSlides(slideIndex), 300)
}

function showData(a) {

   var b = aboutTemplate.cloneNode(!0);
    b.querySelector(".header_slideshow").textContent = a.title.rendered;
	b.querySelector(".paragraph").textContent = a.content.rendered;
	b.querySelector("#price").textContent = a.acf.vinyl_hot_deals;
	b.querySelector(".img").setAttribute("src", a.acf.image.url);

						  
	aboutList.appendChild(b);
}

fetchAbout();


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
	
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
	 // console.log(dots[i]);
	
  }
  slides[slideIndex-1].style.display = "block";  

// Add active class to the current button (highlight it)
if (slides[slideIndex-1].style.display = "block"){
var header = document.getElementsByClassName("Highlight");
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" highlight_dot", "");
  }
  this.className += " highlight_dot";
  });
}

} else{
dots[i].style.backgroundColor = "#E6E6E6";
}}
	
