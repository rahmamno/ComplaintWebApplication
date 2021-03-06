const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcyrpt = require('bcryptjs');

passport.use(new localStrategy({
    usernameField: 'email'
}), async (email, password, done) => {

    //Match User
    const user = await Customer.findOne({ email })
    if (!user) {
        return done(null, false, { message: 'User not registerd' })
    }

    //Match Password
    bcyrpt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password' })
        }
    })

})

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});