const passport = require('passport');
const bcyrpt = require('bcryptjs');
const Users = require('../Modules/Admin');
const Customer = require('../Modules/Customer');
const { ensureAuthenticated } = require('../Services/auth');
const Admin = require('../Modules/Admin');
const cors = require('cors');
const Complaints = require('../Modules/Complaints');

module.exports = (app) => {
    //create a route handler
    app.get('/admin/login', cors(), (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/AdminDashboard',
            failureRedirect: '/admin/login',
            failureFlash: true
        })(req, res, next);
    });

    app.get('/Customer/login', cors(), (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/CustomerDashboard',
            failureRedirect: '/Customer/login',
            failureFlash: true
        })(req, res, next);
    });

    app.post('/api/Customer/register', cors(), async (req, res) => {
        const { name, email, password, confirmPassword } = req.body;

        let errors = {};
        //check requierd fields 
        if (!name || !email || !password || !confirmPassword) {
            //errors.push({ msg: 'Requierd fields are missing!' })
            res.send({ msg: 'Requierd fields are missing!' })
        }

        if (password != confirmPassword) {
            //({ msg: 'Password do not match' })
            res.send({ msg: 'Password do not match' })
        }

        //if there is a validaion error stay in the same page and keep the parameters and show the errors
        if (errors.length > 0) {
            res.render({
                errors,
                name,
                email,
                password,
                confirmPassword
            });
        } else {
            //users validation
            const CustomerExist = await Customer.findOne({ email })
            if (CustomerExist) {//if Customer aleady exist
                //errors.push({ msg: 'Customer is already exist' })
                res.send({ msg: 'Customer is already exist' })
                res.render({
                    errors,
                    name,
                    email,
                    password,
                    confirmPassword
                });
            } else {
                //create instance to save in MongoDB
                const newUser = new Customer({
                    name,
                    email,
                    password
                })

                //hash password(encrypted password)
                bcyrpt.genSalt(10, (err, salt) =>
                    bcyrpt.hash(newUser.password, salt, async (err, hash, done) => {
                        if (err) throw err;
                        //set password to hashed
                        newUser.password = hash;

                        const user = await newUser.save()
                        res.redirect('./login');
                        return user;
                    }))
            }
        }
    });

    app.post('/api/Admin/register', cors(), async (req, res) => {
        const { name, email, password, confirmPassword } = req.body;

        let errors = {};

        //check requierd fields 
        if (!name || !email || !password || !confirmPassword) {
            //errors.push({ msg: 'Requierd fields are missing!' })
            res.send({ msg: 'Requierd fields are missing!' })
        }

        if (password != confirmPassword) {
            //({ msg: 'Password do not match' })
            res.send({ msg: 'Password do not match' })
        }

        //if there is a validaion error stay in the same page and keep the parameters and show the errors
        if (errors.length > 0) {
            res.render({
                errors,
                name,
                email,
                password,
                confirmPassword
            });
        } else {
            //users validation
            const AdminExist = await Admin.findOne({ email })
            if (AdminExist) {//if Admin aleady exist
                //errors.push({ msg: 'Admin is already exist' })
                res.send({ msg: 'Admin is already exist' })
                res.render({
                    errors,
                    name,
                    email,
                    password,
                    confirmPassword
                });
            } else {
                //create instance to save in MongoDB
                const newUser = new Admin({
                    name,
                    email,
                    password
                })

                //hash password(encrypted password)
                bcyrpt.genSalt(10, (err, salt) =>
                    bcyrpt.hash(newUser.password, salt, async (err, hash, done) => {
                        if (err) throw err;
                        //set password to hashed
                        newUser.password = hash;

                        const user = await newUser.save()
                        res.redirect('/AdminDashboard');
                        //return done(null, user);
                        return user;
                    }))
            }
        }
    });

    app.get('/AdminDashboard', cors(), async (req, res) => {
        const Complaints = await Complaints.find()//get all the complaints 
        res.send({ msg: Complaints })
    });

    app.get('/CustomerDashboard', cors(), async (req, res) => {
        const { email } = req.body;

        const ustomerComplaints = await Complaints.find({ email })
        if (ustomerComplaints) {//if customer has complaints retrive it
            res.send({ ustomerComplaints: ustomerComplaints })
        }
    });

    app.get('/api/logout', cors(), (req, res) => {
        req.logout();
        req.redirect('/')
    })

    app.get('/api/currentUser', cors(), (req, res) => {
        res.send({ req });
        res.send({ hi: 'there' })
    })

    app.post('/api/addCoplaint', cors(), async (req, res) => {
        const { complaint } = req.body;

        let errors = {};

        //check requierd fields 
        if (!complaint) {
            res.send({ msg: 'complaint field is missing!' })
        }

        //add complaint to the database
        const newComplaint = new Complaints({
            complaint,
            status: "Pending",
            email
        })

        await newComplaint.save()
        res.redirect('/CustomerDashboard');
        return true;
    });

    app.post('/api/UpdateCoplaint', cors(), async (req, res) => {
        const { email, status } = req.body;

        let errors = {};

        //check requierd fields 
        if (!complaint) {
            res.send({ msg: 'complaint field is missing!' })
        }

        //add complaint to the database
        const newComplaint = new Complaints({
            status,
            email
        })

        await newComplaint.updateOne({email, status}) //update when email , 
        res.redirect('/CustomerDashboard');
        return true;
    });
}

