

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
		console.log(slideIndex);
	}, 5000);
	// setTimeout(showSlides(slideIndex), 300)
}

function showData(a) {
	//console.log(a.acf.image.url)
   var b = aboutTemplate.cloneNode(!0);
    b.querySelector(".header_slideshow").textContent = a.title.rendered;
	b.querySelector(".paragraph").textContent = a.content.rendered;
	b.querySelector("#price").textContent = a.acf.vinyl_hot_deals;
	// b.querySelecotr().style.backgroundImage = url();
	b.querySelector(".img").setAttribute("src", a.acf.image.url);
	//b.querySelector(".img").setAttribute("src", a._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url)
						  
	aboutList.appendChild(b)
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
	  console.log(dots[i]);
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
	console.log(dots.length)
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
	
}



/*function fetchSlideShow(){
 
 let endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/Vinyls?per_page=20&_embed=wp:featuredmedia";
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
    //clone.querySelector("img").setAttribute("src", aSlide._embedded["wp:featuredmedia"][0].media_details.source_url);
	console.log ("checked")
 
    
    let SlideList = document.querySelector("#SlideList");
    SlideList.appendChild(clone);
 }


*/

























