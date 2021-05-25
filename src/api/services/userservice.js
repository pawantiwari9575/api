const { isLoggedIn } = require('../middlewere/authtoken');
const User = require('../models/userschema');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
exports.UserHomeService= (body) => {
    return new Promise((resolve, reject) => {
        resolve("this is home page")
    })
}



exports.UserSignupService= (req, body) => {
    console.log(body)
    const { name, password, username } = body;
    const newUser = new Recipe({ name, password, username });

    return new Promise((resolve, reject) => {
        Recipe.findOne({usernsme})
        .then((user) =>{
            if(user ) return reject('User alrady exitis');
            
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    newUser.password = hash; 
                    newUser.save()
                    .then(userCreated =>  resolve(userCreated))
                    .catch(err => reject(err));
                });
            });
            
           
        }).catch((err) =>reject(err))
      
    })
}

exports.UserSinginService= (body) => {
    const { password, username } = body;
    return new Promise((resolve, reject) => {
        Recipe.findOne({username})
        .then(user => {
            if(!user) return reject("User Not Found")
            bcrypt.compare("password", user.password, function(err, res) {
                if(!res) return reject("Password Wrong")
               const token= jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
                resolve(user) 
            });
        })
        .catch((err) =>reject(err))
    })
}


