

const { UserSignupService, UserSinginService, UserHomeService} = require('../services/userservice')

exports.UserSingupController = (req, res, next) =>{
    UserSignupService(req.body)
        .then(massage =>res.status(200).json({massage:'Created user', massage}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}

exports.UserSinginController = (req, res, next) =>{
    UserSinginService(req, req.body)
        .then(user =>res.status(201).json({massage:'User Logein', user}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}

exports.UserHomeController = (req, res, next) =>{
    UserHomeService(req.body)
        .then(user =>res.status(201).json({massage:'User Logein', user}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}