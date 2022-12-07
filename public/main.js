
const mysql = require('mysql2');
const express = require('express');
//const { appendFile } = require('fs');
const sequelize = require("../database");
const Menu = require("./Models/menu");
const User = require("./Models/user");



//sync to database
sequelize
  .sync({force: true})
  // .sync()
  .then(result => {
    console.log(result);
  })
  .catch((err) => {
  console.log(err);
});




/////////API format///////////
//app.METHOD(PATH, HANDLER);
// app.get('/', function (req, res) {
//       res.json('this is the response')
// })        //get data
// app.post()           //add data
// app.put()            // edit 
// app.delete()


//const order = document.querySelector('')

// fetch('put in url here')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(food => {
//       const ID = 
//     })//console.log(data))        //chaining methods
//   }
//   .catch(err => console.log(err))
// might need cors package to use this fetch API (npm install cors)

// const urlBackEnd = 'http://localhost:8383'
// const urlDb = 'http://localhost'

// async function getInfo(e) {
//   e.preventDefault()
//   const res = await fetch(urlBackend + 'All', {
//     method: 'GET'
//   })
//   console.log(res)
//   const data = await res.json()
//   input.value = data  //might have to add dot property

// }

// async function postInfo(e) {
//   e.preventDefault()
//if (input.value == '') {return}
//   const res = await fetch(urlBackEnd + 'All', {
//     method: 'POST'
        // headers: {
        //     "Content-Type": 'application/json'
        // },
        // body:JSON.stringify({
        //   parcel: input.value
        // })

//   })
//   console.log(res)
//   const data = await res.json()
//   input.value = data  //might have to add dot property
 
// }

const entreeEl = document.querySelector(".entreeContainer");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");




const filteredEntree = food.filter((item) => {
    return item.category == "Entree";
});

//console.log(filteredEntree);

const filteredAppetizer = food.filter((item) => {
    return item.category == "Appetizer";
});

console.log(filteredAppetizer);

const filteredDessert = food.filter((item) => {
    return item.category == "Dessert";
});

console.log(filteredDessert);


const filteredDrink = food.filter((item) => {
    return item.category == "Drinks";
});

console.log(filteredDrink);
//renderMenuObj(filteredEntree);
//renderMenuObj(filteredAppetizer);
//renderMenuObj(filteredDessert);
//renderMenuObj(filteredDrink);

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
                    <div class="add-to-cart" onclick="addToCart(${Food.id})">
                        <img src="./img/plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
            
        `;


    });
}

renderMenuObj(food);



//create cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {

    const item = food.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  

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
    totalItems += 1;
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
      } else if (action === "plus" && numberOfUnits) {
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
