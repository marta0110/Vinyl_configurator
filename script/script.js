let aboutTemplate = document.querySelector("#hot_deals").content;
let aboutList = document.querySelector("#hot_deals_slideshow");
let  aboutPage = 1;


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
}

function showData(a) {
   var b = aboutTemplate.cloneNode(!0);
    b.querySelector(".header_slideshow").textContent = a.title.rendered,
	b.querySelector(".paragraph").textContent = a.content.rendered,

									  
	aboutList.appendChild(b)
}



fetchAbout()

function fetchSlideShow(){
 
 let endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/Vinyls?_embed";
 fetch(endpoint)
      .then(e => e.json())
      .then(showSlideShow);
	
}
function showSlideShow(data){
    console.log(data);
       data.forEach(showSingleSlide);   
    showSlides();
}
function showSingleSlide(aSlide) {
 
    let template = document.querySelector(".slide_template").content;
    let clone = template.cloneNode(true);
    console.log(aSlide);  
    clone.querySelector("img").setAttribute("src", aSlide._embedded["wp:featuredmedia"][0].media_details.source_url);
	console.log ("alal")
 
    
    let SlideList = document.querySelector("#SlideList");
    SlideList.appendChild(clone);
 }

fetchSlideShow();

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    console.log(slideIndex)
    if (slideIndex >= slides.length) {slideIndex = 0} 
    console.log(slideIndex, slides.length)
    slides[slideIndex].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}