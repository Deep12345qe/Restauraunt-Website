// class Entre{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Side{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Beverage{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Food {
//     constructor(name, price, type, calorie, description){
//         this.name = name;
//         this.price = price;
//         this.type = type;
//         this.calorie = calorie;
//         this.description =  description;
//     }
// }

// class Combo {
//     constructor(entre, side, beverage){
//         this.entre = entre;
//         this.side = side;
//         this.beverage = beverage;
//     }

//     function comboPrice(entre, side, beverage) {
//         return entre.price + side.price + beverage.price;
//     }
// }


const entreeEl = document.querySelector(".entreeContainer");
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");




const filteredEntree = food.filter((item) => {
    return item.category == "Entree";
});

console.log(filteredEntree);




function renderMenuObj(filteredItem) {
    filteredItem.forEach((Food) => {
        entreeEl.innerHTML += `
            
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img class="card-image" src="${Food.imgSrc}" alt="${Food.name}">
                    </div>
                    <div class="desc">
                        <div class="cals text-left">Calories ${Food.calorie}</div>
                        <div class="price text-right">$ ${Food.price}</div>
                        <div id="food-name" class="text-center">${Food.name}</div>
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${Food.name})">
                        <img src="./img/plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
            
        `;


    });
}








const filteredAppetizer = food.filter((item) => {
    return item.category == "Appetizer";
});

//console.log(filteredAppetizer);

const filteredDessert = food.filter((item) => {
    return item.category == "Dessert";
});

//console.log(filteredDessert);


const filteredDrink = food.filter((item) => {
    return item.category == "Drinks";
});

//console.log(filteredDrink);

//renderMenuObj();

//renderMenuObj(filteredEntree);
//enderMenuObj(filteredAppetizer);
//renderMenuObj(filteredDessert);
renderMenuObj(food);



    // console.log(menu)
    
    //from this menu I need to pull out all food that has a category of "Entree", "Appetizer", "Drinks", and "Deserts"


    //testing template literals
    // const foodElem = document.querySelector(".testContainer");

    // function renderFoodElem() {
    //     filteredEntree
    // }

    // cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}