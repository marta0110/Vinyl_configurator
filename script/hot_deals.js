/* FETCH DATA FROM	 WP */

let SummaryTemplate = document.querySelector("#summary_template").content;
let SummaryList = document.querySelector(".package_deals");
let SummaryPage = 1;


function fetchHotDeals() {
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/package_deal?per_page=4" + SummaryPage;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/package_deal?per_page=4" + SummaryPage + "&categories=" + b), fetch(c).then(function(d) {
        return d.json()
    }).then(showHotDeals)
}
function showHotDeals(a) {
    console.log(a);
	lookingForData = !1;
	a.forEach(showData)
	
}

function showSlideShow(data){
    console.log(data);
       data.forEach(showSingleSlide);   
    showSlides();
}

function showData(a) {
	//console.log(a.acf.image.url)
   var b = SummaryTemplate.cloneNode(!0);
    b.querySelector(".amount").textContent = a.title.rendered;
	b.querySelector(".package_price").textContent = a.content.rendered;
	
						  
	SummaryList.appendChild(b)
}


fetchHotDeals()