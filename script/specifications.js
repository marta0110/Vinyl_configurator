// set the total price amount

let totalPrice = document.querySelector("#total_price");
let FixedPrice = document.getElementById('total_price').textContent;
console.log(FixedPrice)
let ShowPrice = +FixedPrice;
totalPrice.innerHTML = ShowPrice.toLocaleString("en") + " dkk"


// dropdown list

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
		c.addEventListener("click", function (e) {
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
	a.addEventListener("click", function (e) {
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


// PRICE ACTUALIZATION  + ACTIVE BOXES//
function addline() {
	let element = document.querySelector(".custom-select-amount")
	let elementFinish = document.querySelector(".custom-select-finish")
	let price = document.querySelector(".additional_inf_price")
	let text = document.querySelector(".text")
	let PriceChange = document.querySelector(".var_price")
	let PriceChangeFinish = document.querySelector(".var_price_finish")
	let value2 = document.querySelector(".value2")
	let MyList = document.getElementById("mySelect").value;
	let MyFinish = document.getElementById("myFinish").value;



	//elementFinish.style.borderBottom = "4px solid #000";
	element.style.borderBottom = "4px solid #000";
	price.style.paddingBottom = "20px";
	text.style.paddingBottom = "3px";

	if (MyList == 2) {
		PriceChange.innerHTML = "250dkk";

		showPrice = +FixedPrice + +250;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
	} else if (MyList == 3) {
		PriceChange.innerHTML = "350dkk"
		
		showPrice = +FixedPrice + +350;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
	

	} else if (MyList == 4) {
		PriceChange.innerHTML = "420dkk"
		
		showPrice = +FixedPrice + +420;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"

	} else if (MyList == 5) {
		PriceChange.innerHTML = "500dkk"
		
		showPrice = +FixedPrice + +500;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
	} else {
		PriceChange.innerHTML = "0 dkk"
	}

	
	console.log(MyFinish)
	console.log(PriceChangeFinish);
	if (MyFinish == 1) {
		PriceChangeFinish.innerHTML = "1500dkk"
		 
	NewPrice = +showPrice + +1500;
   console.log(NewPrice);
	totalPrice.innerHTML = NewPrice.toLocaleString() + " dkk"

	} else if (MyFinish == 2) {
		PriceChangeFinish.innerHTML = "3000dkk"
	
	NewPrice = +showPrice + +3000;
   console.log(NewPrice);
	totalPrice.innerHTML = NewPrice.toLocaleString() + " dkk"

	} else if (MyFinish == 3) {
		PriceChangeFinish.innerHTML = "500dkk"
		totalPrice.innerHTML = "20.500 dkk"
		
			
	NewPrice = +showPrice + +500;
   console.log(NewPrice);
	totalPrice.innerHTML = NewPrice.toLocaleString() + " dkk"

	} else {
		PriceChangeFinish.innerHTML = "0 dkk"
	}


}
	

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/


document.addEventListener("click", closeAllSelect);
document.addEventListener("click", addline);


// fixed summary under hot_deals additional informations section 

var socialFloat = document.querySelector('.summary');
var footer = document.querySelector('.footer');

function checkOffset() {
	function getRectTop(el) {
		var rect = el.getBoundingClientRect();
		return rect.top;
	}

	if ((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
		socialFloat.style.position = 'absolute';
	//	socialFloat.style.marginTop = "18px";
	//socialFloat.style.top = "0";


	if (document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
		socialFloat.classList.add = "position" // restore when you scroll up
	
}

document.addEventListener("scroll", function () {
	checkOffset();
});
