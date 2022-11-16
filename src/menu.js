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


const food =      [
    {
        name: "Enchiladas", category: "Entree", price: 5.00, calorie: 280, qty: 3, description: { side: ["rice", "salad", "beans"], flavor: "N/A"}, imgSrc: "img/enchilada.jpg",
    },

    {
        name: "Chile Verde", category: "Entree", price: 6.00, calorie: 380, qty: 1, description: { side: ["rice", "salad", "beans", "tortillas"], flavor: "N/A" }, imgSrc: "img/chile verde.jpg",
    },

    {
        name: "Chicken Fajitas", category: "Entree", price: 6.00, calorie: 370, qty: 1, description: { side: ["grilled onion", "red and green peppers", "salad", "rice"], flavor: "N/A" }, imgSrc: "img/fajitas.jpg",
    },

    {
        name: "Super Burrito", category: "Entree", price: 6.00, calorie: 370, qty: 1, description: { side: ["guacamole", "chease", "sour cream", "pico de gallo"], flavor: "N/A" }, imgSrc: "img/burrito.jpg",
    },

    {
        name: "Tacos", category: "Entree", price: 6.00, calorie: 370, qty: 3, description: { side: ["onion toppings", "cilantro", "salsa", "lemon"], flavor: "N/A" }, imgSrc: "img/taco.jpg",
    },

    {
        name: "Nachos", category: "Appetizer", price: 3.00, calorie: 260, qty: "N/A", description: { side: ["melted cheese", "sour cream", "guacamole", "pico de gallo"], flavor: "N/A" }, imgSrc: "img/nacho.jpg",
    },

    {
        name: "Guacamole Dip", category: "Appetizer", price: 3.00, calorie: 260, qty: "N/A", description: { side: ["Tortilla chips"], flavor: "N/A" }, imgSrc: "img/Guacamole.jpg",
    },

    {
        name: "Taquitos", category: "Appetizer", price: 3.00, calorie: 260, qty: 3, description: { side: ["refried beans", "sour cream", "vegies", "queso fresco"], flavor: "N/A" }, imgSrc: "img/Taquitos.jpg",
    },

    {
        name: "Tostada de ceviche", category: "Appetizer", price: 3.00, calorie: 260, qty: "N/A", description: { side: ["Choice of fish or shrimp"], flavor: "N/A" }, imgSrc: "img/shrimp.jpg",
    },

    {
        name: "Fried Mozarella", category: "Appetizer", price: 3.00, calorie: 260, qty: "N/A", description: { side: ["marinara sauce"], flavor: "N/A" }, imgSrc: "img/Mozarella.jpg",
    },

    {
        name: "Churros", category: "Dessert", price: 4.00, calorie: 360, qty: 3, description: { side: ["homemade"], flavor: "N/A" }, imgSrc: "img/churros.jpg",
    },

    {
        name: "Cheesecake", category: "Dessert", price: 4.00, calorie: 360, qty: "N/A", description: { side: ["homemade"], flavor: "N/A" }, imgSrc: "img/cheesecake.jpg",
    },

    {
        name: "Flan", category: "Dessert", price: 4.00, calorie: 360, qty: "N/A", description: { side: ["homemade"], flavor: "N/A" }, imgSrc: "img/flan.jpg", 
    },

    {
        name: "Shakes", category: "Dessert", price: 4.00, calorie: 360, qty: "N/A", description: { side: "N/A", flavor: ["vanilla", "chocolate"] }, imgSrc: "img/shakes.jpg",
    },

    {
        name: "Molten Chocolate", category: "Dessert", price: 4.00, calorie: 360, qty: "N/A", description: { side: ["Topped with vanilla icecream"], flavor: "N/A"}, imgSrc: "img/Molten Chocolate.jpg",
    },
    
    {
        name: "Jarritos", category: "Drinks", price: 2.00, calorie: 120, qty: 1, description: { side: "N/A", flavor: ["Fresa", "Tamarindo", "Mango", "Mandarina",  "Toronja", "Pineapple"] }, imgSrc: "img/Jarritos.jpg",
    },

    {
        name: "Soda", category: "Drinks", price: 2.00, calorie: 120, qty: 1, description: { side: "N/A", flavor: ["Various"] }, imgSrc: "img/Soda.jpg",
    },

    {
        name: "Aqua Fresca", category: "Drinks", price: 3.00, calorie: 120, qty: 1, description: { side: ["New daily"], flavor: "N/A" }, imgSrc: "img/Aqua Fresca.jpg",
    },

    {
        name: "Lemonade", category: "Drinks", price: 2.00, calorie: 120, qty: 1, description: { side: "N/A", flavor: ["Strawberry", "Peach"] }, imgSrc: "img/lemonade.jpg",
    },

    {
        name: "Horchata", category: "Drinks", price: 2.00, calorie: 120, qty: 1, description: { side: "N/A", flavor: [""] }, imgSrc: "img/horchata.jpg",
    }
]




const filteredEntree = food.filter((item) => {
    return item.category == "Entree";
});

//console.log(filteredEntree);

//select entree element
const entrees = document.querySelector(".swiper-container");

function renderMenuObj(filtered) {
    filtered.forEach((Food) => {
        entrees.innerHTML += `
 
            <div class="swiper-wrapper ${Food.category}">
                <div class="swiper-slide">
                <img class="card-image" src="${Food.imgSrc}" alt="${Food.name}">
                    <div class="card-columns">
                        <div class="cals text-left">Calories ${Food.calorie}</div>
                        <div id="food-name" class="text-center">${Food.name}</div>
                        <div class="price text-right">$ ${Food.price}</div>
                    </div>
                 </div>
            </div>

            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>

        `
        let slider = new Swiper ('.swiper-slide', {
            effect: 'slide',
            
            pagination: {
              el: '.swiper-pagination',
            },
            
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });

    })
}








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


renderMenuObj(filteredEntree);
renderMenuObj(filteredAppetizer);
renderMenuObj(filteredDessert);
renderMenuObj(filteredDrink);



    // console.log(menu)
    
    //from this menu I need to pull out all food that has a category of "Entree", "Appetizer", "Drinks", and "Deserts"