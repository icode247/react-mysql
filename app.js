const express = require("express");
var passport = require("passport");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv');

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

//Models
var models = require("./models");

//Routes

var authRoute = require('./routes/auth.js')(app, passport);


//load passport strategies

require('./config/passport/passport.js')(passport, models.user);
console.log(`models user: ${models.User}`)

//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database is fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});
app.get("/", async (req, res) => res.send("sever runing"))
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => console.log(`Server started at port ${PORT}`))