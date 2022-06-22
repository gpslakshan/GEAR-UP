let cart = [];
let maxSize = 0;


function getProductList() {
    const ImagePath = "images/"
    const product1 = new Product(0, "Nike Football", 80,ImagePath + 'football1.jpg');
    const product2 = new Product(1, "Wilson Badminton Bat", 50, ImagePath + 'badminton.jpg');
    const product3 = new Product(2, "Cricket Bat", 60, ImagePath + 'cricket1.jpg');
    const product4 = new Product(3, "Cricket Helmet", 40, ImagePath + 'helmet.jpg' )
    const product5 = new Product(4, "Nike Black Shoes",70, ImagePath + 'nike1.jpg')
    const product6 = new Product(5,"Nike T-shirt", 50, ImagePath+ 'tshirt1.jpg')
	const product7 = new Product(6,"Cricket Ball", 20, ImagePath+ 'ball1.jpg')
	const product8 = new Product(7,"Rugby Ball", 40, ImagePath+ 'rugby.jpg')
    return [product1, product2, product3, product4, product5, product6, product7, product8];
}


function getCurrentItem(productCode) {
    const productList = getProductList();
    return productList[parseInt(productCode)];
}

function alreadyInCart(productCode) {
    const quantity = parseInt(document.getElementById(productCode).value);

    for(let i =0; i < cart.length; i++) {
        if(cart[i][0].productID === parseInt(productCode)) {
            cart[i][1] += quantity;
            return true;
        }
    }
    return false
}

function addToCart(productCode) {
    const currentItem = getCurrentItem(productCode);
    const quantity = parseInt(document.getElementById(productCode).value);
    if(isNaN(quantity)) {
        
        alert("Give a quantity");
        return false;
    }

    if(!alreadyInCart(productCode)) {
        cart.push([currentItem, quantity]);
    }
    
}

class Product {
    constructor(productID, productName, productPrice, productImage) {
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImage = productImage;
    }
}

function clearCart() {
    const  element = document.getElementById("cartItems");
    element.innerHTML = "";
    showTotalPrice("0", element);
    cart = [];
}

function showTotalPrice(totalPrice, element) {
    const totalPar = document.createElement("p");
    const totalNode = document.createTextNode("Total price: $ " + totalPrice);
    totalPar.appendChild(totalNode);
    element.appendChild(totalPar);
}

function showCart() {


    const element = document.getElementById("cartItems");
    let totalPrice = 0;


    
    const modal = document.getElementById("cartModel");

   
    const closeButton = document.getElementsByClassName("close")[0];



    element.innerHTML = "";



    const cartTable = document.createElement("table");
    cartTable.setAttribute("id", "myTable");
    element.appendChild(cartTable);

    const headerRow = document.createElement("tr");

    const imageHeader = document.createElement('th');
    imageHeader.innerText = "Image";
    headerRow.appendChild(imageHeader);

    const nameHeader = document.createElement('th');
    nameHeader.innerText = "Product";
    headerRow.appendChild(nameHeader);

    const priceHeader = document.createElement('th');
    priceHeader.innerText = "Price";
    headerRow.appendChild(priceHeader);

    const quntityHeader = document.createElement('th');
    quntityHeader.innerText = "Quantity";
    headerRow.appendChild(quntityHeader);

    cartTable.appendChild(headerRow);

    for (let i = 0; i < cart.length; i++) {
        const tableRow = document.createElement("tr");
        tableRow.setAttribute("id", i.toString());
        cartTable.appendChild(tableRow);

        
        const image = document.createElement('img');
        image.style.width = "100px";
        image.style.height = "100px";
        image.src = cart[i][0].productImage;
        tableRow.appendChild(image);

        
        const productNameCell = document.createElement("td");
        const productName = document.createTextNode(cart[i][0].productName);

        productNameCell.appendChild(productName);
        tableRow.appendChild(productNameCell);

        
        const productPriceCell = document.createElement('td');
        const productPrize = document.createTextNode(cart[i][0].productPrice);
        productPriceCell.appendChild(productPrize);
        tableRow.appendChild(productPriceCell);

        
        const quantityCell = document.createElement('td');
        const quantity = document.createTextNode(cart[i][1]);
        quantityCell.appendChild(quantity);
        tableRow.appendChild(quantityCell);


        totalPrice += cart[i][0].productPrice * cart[i][1];
    }

    const priceRow = document.createElement('tr');
    const totalPriceCell = document.createElement('td');
    priceRow.appendChild(totalPriceCell);
    cartTable.appendChild(priceRow);

    showTotalPrice(totalPrice, element);


    
    modal.style.display = "block";


    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

}


function checkout1(){

	var x = document.getElementById("fname").value;
	if(x == '' || x<0 || x>0) {
		alert("Give a Name");
        return false;
    }
	var y = document.getElementById("email").value;
	if(y == '' || y<0 || y>0) {
		alert("Give a valid email");
        return false;
    }
	var z = document.getElementById("adr").value;
	if(z=='' || z<0 || z>0) {
		alert("Give a valid address");
        return false;
    }
	var w = document.getElementById("city").value;
	if(w=='' || w<0 || w>0) {
		alert("Give a valid city");
        return false; 
    }
	var M = document.getElementById("cardNumber").value;
	if(M=='' || M<0 || M>0) {
		alert("Give a valid Card Number");
        return false;
    }
	else{
		var y = document.getElementById("email").value;
		document.getElementById("mail").innerHTML ="Email"+"="+y;

		document.getElementById("came").innerHTML ="Name"+"="+x;
		document.getElementById("thanks").innerHTML ="Thank you for stay with us";
	}
		
	
	
	
	
}
