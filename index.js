//get the express library
const express = require('express');
const mongoose = require('mongoose');
const credentials= require('./config/credentials');
const session = require('express-session');
require('./Modules/Admin');
require('./Modules/Customer');
const passport = require('passport');
require('dotenv').config();
const flash = require('express-flash');
const cors = require('cors');

//create express application
const app = express();

//require('./Services/passport')(passport);

//Database config and connect
const db = process.env.REACT_APP_MongoDB_URL;
mongoose.connect(credentials.mongoDB_URL, { useUnifiedTopology: true,useNewUrlParser: true })
    .then(() => console.log('MongoDB is Connected'))
    .catch(err => console.log(err));

//Bodyparser 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false }))

// express session 
app.use(session({
    secret: 'thisisadeepsecret',  //session secret updated
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use(cors()); //remove conflicts from server side and client side

app.use(flash()); // use express-flash for flash messages stored in session

//let Passport use cookie auhentication for the users
app.use(passport.initialize());
app.use(passport.session());

//routes
require('./routes/authRouts')(app, passport);

//define the port to listen from Heroku  
const PORT = process.env.PORT || 5000
app.listen(PORT);