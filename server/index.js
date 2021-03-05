//get the express library
const express = require('express')
//create express application
const app = express();

//create a route handler
app.get('/', (req, res) =>{
    res.send({hi: 'there'})
});

//define the port to listen from Heroku 
const PORT = process.env.PORT || 5000
//listen to the app at port 5000
app.listen(5000);