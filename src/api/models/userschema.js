const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
},{timestamp: true});

module.export = mongoose.model('user', userschema);