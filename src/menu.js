
=======
//written by David and Russel
//tested by David and Russel
//debugged by David and Russel


// a huge object array of food used as a temporary storage of menu Data until dastabase connection have been stablished.
>>>>>>> 090fe7168d65712fdff02ca0c758fbecaf3a07ac

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
        name: "Tostada de ceviche", category: "Appetizer", price: 3.00, calorie: 260, qty: "N/A", description: { side: ["Choice of fish or shrimp"], flavor: "N/A" }, imgSrc: "img/ceviche.jpg",
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
        name: "Soda", category: "Drinks", price: 2.00, calorie: 120, qty: 1, description: { side: "N/A", flavor: ["Various"] }, imgSrc: "img/cola.jpg",
    },

    {
        name: "Aqua Fresca", category: "Drinks", price: 3.00, calorie: 120, qty: 1, description: { side: ["New daily"], flavor: "N/A" }, imgSrc: "img/Aqua Fresca.jpg",
    },

    {
        name: "Lemonade", category: "Drinks", price: 2.00, calorie: 120, qty: 1, description: { side: "N/A", flavor: ["Strawberry", "Peach"] }, imgSrc: "img/lemonade.jpg",
    },

    {
        name: "Horchata", category: "Drinks", price: 2.00, calorie: 120, qty: 1, description: { side: "N/A", flavor: [""] }, imgSrc: "img/horchata.jpg",
    },
    
    {
        name: "Beer", category: "Drinks", price: 5.00, calorie: 200, qty: 1, description: { side: "N/A", flavor: ["Modelo", "Modelo Negro"] }, imgSrc: "img/beer.jpg",
    },
]