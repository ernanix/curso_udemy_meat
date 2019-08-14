"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    console.log("log body email " + req.body['email']);
    console.log("log body pwd " + req.body['password']);
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'meat-api-psw');
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    console.log("user name: " + user.name);
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    console.log("dbUser: " + dbUser);
    return dbUser !== undefined && dbUser.matches(user);
}
