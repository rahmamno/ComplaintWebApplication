const mongoose = require('mongoose');

//create Admin schema
const AdminSchema = new mongoose.Schema({
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
        required: true,
        value: Date.now
    }
})

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;