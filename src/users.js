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
    constructor(name, password, date, email){
        this.name = name;
        this.password = password;
        this.date = date;
        this.email = email;
    }

    //method1() {}
    //method2() {}

    //getters
    get name() {
        return this.name;
    }

    get password() {
        return this.password;
    }

    get email() {
        return this.email;
    }

    //setters
    set password(newPassword) {
        this.password = newPassword;
    }

}
//Admin and owner
class AdminUser extends Users{
    constructor(name, password, date, email, admin) {
        super(name, password, date, email)
        this.role = admin;
    }
} 

const newUser = new Users();