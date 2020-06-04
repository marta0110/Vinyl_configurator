//animate progress bar
//open adress section on click hotdeals.html  addditional info
let socialFloat = document.querySelector('.summary');
let footer = document.querySelector('.footer');
let form = document.querySelector(".adress_form");
let additionalInf = document.querySelector(".additional_information");
let progressBar = document.querySelector(".progress");
let progressWidth = document.querySelector(".showProgress");
let confirmationSection = document.querySelector("#step3");
let hotDealsSection = document.querySelector(".additional_inf_lp")
let orderConfirmed = document.querySelector("#order_confirmed")
let mainWrapper = document.querySelector(".additional_inf_lp")
console.log(form)

orderConfirmed.addEventListener("click", confirmationMsg);

function confirmationMsg() {
	confirmationSection.style.display = "block";
	progressWidth.style.width = "100%";
	form.style.display = "none";
	additionalInf.style.display = "none";
	additionalInf.classList.add = "none";
}

function openForm() {
	additionalInf.style.display = "none";
	form.style.display = "block";
	progressBar.classList.add = "ProgressChange";
	progressWidth.style.width = "66%";
}


//open confirmation section on click adress

console.log(confirmationMsg)
console.log(hotDealsSection)
console.log(orderConfirmed)

// set the total price amount
let totalPrice = document.querySelector("#total_price");
let FixedPrice = document.getElementById('total_price').textContent;
console.log(FixedPrice)
let ShowPrice = +FixedPrice;
totalPrice.innerHTML = ShowPrice.toLocaleString("en") + " dkk"

// dropdown list
let x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);

	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {

	c = document.createElement("DIV");
	c.innerHTML = selElmnt.options[j].innerHTML;
	c.addEventListener("click", function (e) {

   let y, i, k, s, h;
	
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
		
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	let x, y, i, arrNo = [];
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
	let price = document.querySelector(".additional_inf_price")
	let text = document.querySelector(".text")
	let PriceChange = document.querySelector(".var_price")
	let PriceChangeFinish = document.querySelector(".var_price_finish")
	let value2 = document.querySelector(".value2")
	let MyList = document.getElementById("mySelect").value;
	let MyFinish = document.getElementById("myFinish").value;
	let Sticker = document.querySelector("#sticker");
	let Barcode = document.querySelector("#barcode");
	let Weight = document.querySelector("#weight");
	let SummaryAmount = document.querySelector(".amount")
	let PackagePrice = document.querySelector(".package_price")

	element.style.borderBottom = "4px solid #000";
	price.style.paddingBottom = "20px";
	text.style.paddingBottom = "3px";
	
	if (MyList == 1) {
		PriceChange.innerHTML = "0dkk";

		showPrice = +FixedPrice;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
	}

	if (MyList == 2) {
		PriceChange.innerHTML = "250dkk";

		showPrice = +FixedPrice + +250;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
		SummaryAmount.innerHTML = "500 x 12’’ Records"
		PackagePrice.innerHTML = "10.750 dkk"
	} else if (MyList == 3) {
		PriceChange.innerHTML = "350dkk"

		showPrice = +FixedPrice + +350;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
		SummaryAmount.innerHTML = "1000 x 12’’ Records"
		PackagePrice.innerHTML = "10.850 dkk"


	} else if (MyList == 4) {
		PriceChange.innerHTML = "420dkk"

		showPrice = +FixedPrice + +420;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
		SummaryAmount.innerHTML = "1000 x 12’’ Records"
		PackagePrice.innerHTML = "10.950 dkk"

	} else if (MyList == 5) {
		PriceChange.innerHTML = "500dkk"

		showPrice = +FixedPrice + +500;
		console.log(showPrice);
		totalPrice.innerHTML = showPrice.toLocaleString() + " dkk"
	} else {
		PriceChange.innerHTML = "0 dkk"
		totalPrice.innerHTML = ShowPrice.toLocaleString("en") + " dkk"
	}

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

		NewPrice = +showPrice + +500;
		console.log(NewPrice);
		totalPrice.innerHTML = NewPrice.toLocaleString() + " dkk"

	} else if (MyFinish == 4) {
		PriceChangeFinish.innerHTML = "600dkk"

		NewPrice = +showPrice + +600;
		console.log(NewPrice);
		totalPrice.innerHTML = NewPrice.toLocaleString() + " dkk"

	}
	
	if(Sticker.checked == true){
		StickerNewPrice = +NewPrice + +350;
		console.log(StickerNewPrice);
		totalPrice.innerHTML = StickerNewPrice.toLocaleString() + " dkk"
	}
		if(Barcode.checked == true){
		BarcodeNewPrice = +StickerNewPrice + +255;
		console.log(StickerNewPrice);
		totalPrice.innerHTML = BarcodeNewPrice.toLocaleString() + " dkk"
	}
		if(Weight.checked == true){
		WeightNewPrice = +BarcodeNewPrice + +200;
		console.log(StickerNewPrice);
		totalPrice.innerHTML = WeightNewPrice.toLocaleString() + " dkk"
	}
}

/*add a bottom border to finish dropdown list*/

function addBorder(){
	let elementFinish = document.querySelector(".custom-select-finish")
	elementFinish.style.borderBottom = "4px solid #000";
}
	

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
document.addEventListener("click", addline);

// local storage e-mail adress to confirmation//
function saveData(){
	let input = document.getElementById("e-mail");
    localStorage.setItem("user_mail", input.value);
	console.log(input.value)
	let clientsMail = document.querySelector(".customized_mail");
	clientsMail.innerHTML = input.value;
}