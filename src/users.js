// const User = function (name, email) {
//     this.name = name;
//     this.email = email;
// };


// const russ = new User('Russ', 'rtapia5@csustan.edu');
// console.log(russ);

// const rey = new User('Rey', 'ret@gmail.com');
// const bowz = new User('Bowz', 'Bow@gmail.com');

// console.log(rey, bowz);

// //Prototype
// User.prototype.passwd = function () {
//     console.log(this.name);
// };

// russ.passwd();

class Users {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password =password;
    }

}

