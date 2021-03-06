const mongoose = require('mongoose');

//create Customer schema
const CustomerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: false,
        value: Date.now
    }
})

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;