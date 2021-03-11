const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcyrpt = require('bcryptjs');
const Customer = require('../Modules/Customer');
const Admin = require('../Modules/Admin');

passport.use(new localStrategy({
    usernameField: 'email'
}), async (email, password, done) => {

    //Match Users
    const customer = await Customer.findOne({ email })
    const admin = await Admin.findOne({ email })
    if (!customer || !admin) {
        return done(null, false, { message: 'User not registerd' })
    }

    //Match Password
    if (customer) {
        bcyrpt.compare(password, customer.password, (err, isMatch) => {
            if (err) { return done(err); }

            if (!isMatch)
                return done(null, false, { message: 'Incorrect password' })

            return done(null, customer); //return user information
        })
    }

    else {
        bcyrpt.compare(password, admin.password, (err, isMatch) => {
            if (err) { return done(err); }

            if (!isMatch)
                return done(null, false, { message: 'Incorrect password' })

            return done(null, admin);
        })
    }
})

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});