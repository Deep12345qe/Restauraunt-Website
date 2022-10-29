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

class Food {
    constructor(name, price, type, calorie, description){
        this.name = name;
        this.price = price;
        this.type = type;
        this.calorie = calorie;
        this.description =  description;
    }
}

class Combo {
    constructor(entre, side, beverage){
        this.entre = entre;
        this.side = side;
        this.beverage = beverage;
    }

    function comboPrice(entre, side, beverage) {
        return entre.price + side.price + beverage.price;
    }
}
