var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',

        failureRedirect: '/signup'
    }

    ));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin'
    }

    ));
    app.get('/logout', authController.logout);



}