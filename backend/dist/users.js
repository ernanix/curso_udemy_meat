"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        console.log("matches: " + another);
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "eduardo@gmail.com": new User('eduardo@gmail.com', 'Eduardo', 'edu03'),
    "milena@gmail.com": new User('milena@gmail.com', 'Milena', 'mimi00')
};
