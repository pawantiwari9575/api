const mongoose = require('mongoose');

const recipeschema = new mongoose.Schema({
    dish: String,
    chef: String,
    image: String,
    description: String,
    ingredientsArray: [String],

},{timestamp: true});

module.export = mongoose.model('recipe', recipeschema);