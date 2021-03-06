const mongoose = require('mongoose');

//create Complaints schema
const ComplaintsSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: false,
        value: Date.now
    },
    complaint:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

const Complaints = mongoose.model('Complaints', ComplaintsSchema);

module.exports = Complaints;