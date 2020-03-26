// ITERATION 1 - Calculate Price by Product
//Aprox - > we treat the whole product cart as an array of products

const getPriceByProduct =(itemNode) => {
  let totalUnitsArray = [...document.querySelectorAll(".costUnit")];
  let totalQuantityArray =[...document.querySelectorAll(".quantity")];
  let totalSubtotalArray =[...document.querySelectorAll(".total")];
  let totalUnitsValue = 0.0; //To add all the total values

  //We can iterate in anyone of the three arrays, because all of them have the same length.
  //Without innerText totalUnitsArray[i] would be a Node and JS wouldn't understand.
  for (let i = 0; i < totalUnitsArray.length; i++) {
    totalUnitsValue = parseFloat(totalUnitsArray[i].innerText *totalQuantityArray[i].value).toFixed(2);
    totalSubtotalArray[i].innerText = totalUnitsValue;
    console.log(totalUnitsValue);
  }
}

//Iteration 3: Calculating the total price of all products

const getTotalPrice = () => {

  getPriceByProduct(); 

  let listTotals = [...document.querySelectorAll(".total")];
  let div = document.querySelector("#sumAll");
  let total = 0.0;

  for (let i = 0; i < listTotals.length; i++) {
    total += parseFloat(listTotals[i].innerText);
  }

  let h2 = document.querySelector("h2");

  if (h2 < 1) {
    let h2 = document.createElement("h2"); 
    div.appendChild(h2);
    h2.innerText = `total price: $ ${total}`;
  } else {
    h2.innerText = `total price: $ ${total}`;
  }
}


// Iteration 2: Add another product
const createNewItem = () => {
  let products = document.querySelector("#products");
  let NewProduct = document.querySelector("#newProduct").value;
  let price = document.querySelector("#newPrice").value;
  price = parseFloat(price).toFixed(2);
  let div = document.createElement("div");
  div.setAttribute("class", "wrapper");
  div.innerHTML = `<span class="productName">  ${NewProduct} </span>
    <div class="price">
      Unit Value $:
        <span class="costUnit"> ${price} </span>
    </div>
    <label class="label">
      QTY
        <input class="quantity" type="number" name="cantidad" value="0" />
    </label>

    <div class="totaly">
      Total $:
        <span class="total"> 0.00 </span>
    </div>

    <button class="btn btn-delete" name="btn-delete">Delete</button>
    </div>`;

  products.appendChild(div);
  update();
}


update =() => {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

//AddEventListener
window.onload = function () {
  this.update();
}



// Iteration 4: Deleting a product

function deleteItem(event) {
  event.target.parentElement.remove();

}





