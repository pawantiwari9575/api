require('dotenv').config();
const express = require('express');
const app = express();

// Database config 
require('./database');

//  body parser 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes Confrgation
app.use('/racipe', require('../api/routes/reciperouts'));
app.use('/user', require('../api/routes/userroute')); 


app.listen(process.env.PORT, console.log(`server is runing on port ${process.env.PORT}`));

