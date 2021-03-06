//check if user authenticated
module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        //req.flash('error_msg', 'Please login first');
        res.redirect('Customer/login');
    }
}