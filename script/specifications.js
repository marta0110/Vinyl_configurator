
/*let SpecificationTemplate = document.querySelector("#specifications_template").content;
let SpecificationList = document.querySelector(".specifications");
let SpecificationPage = 1;
let lookingForData = false;


function fetchSpecifications() {
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/specifications?per_page=4" + SpecificationPage;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/specifications?per_page=4" + SpecificationPage + "&categories=" + b), fetch(c).then(function(d) {
        return d.json()
    }).then(showSpecifications)
}
function showSpecifications(a) {
	a.forEach(showSpecifications);
	 lookingForData = false;
}

function showSpecifications(a) {
   var b = SpecificationTemplate.cloneNode(!0);
		 console.log(a);
    b.querySelector(".specification_header").textContent = a.title.rendered;
	//b.querySelector(".specification_p").textContent = a.content.rendered;
	
	
						  
	SpecificationList.appendChild(b)
}


fetchSpecifications()
*/

 


var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
function addline(){
	let element =document.querySelector(".custom-select")
	let price =document.querySelector(".additional_inf_price")
	let PriceChange =document.querySelector(".var_price")
	let value2 =document.querySelector(".value2")
	let MyList = document.getElementById("mySelect").value;
	let totalPrice = document.querySelector(".total_price");
	
	element.classList.add("line");
	price.style.paddingBottom = "20px";
	
	console.log(MyList)
    console.log(PriceChange);
   if (MyList== 2){
		 PriceChange.innerHTML = "1500dkk" 
	   totalPrice.innerHTML = "17.000 dkk"
		  
   } else if (MyList== 3){
		 PriceChange.innerHTML = "300dkk"  
	      totalPrice.innerHTML = "20.000 dkk"
		  
   }else if (MyList== 4){
		 PriceChange.innerHTML = "500dkk"  
	        totalPrice.innerHTML = "20.500 dkk"
		  
   } else {
	    PriceChange.innerHTML = "0 dkk" 
   }

	
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/


document.addEventListener("click", closeAllSelect);
document.addEventListener("click", addline);


