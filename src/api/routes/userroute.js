const router = require('express').Router();

const {
    UserHomeController,
    UserSingupController,
    UserSinginController,
} = require('../controllers/usercontroller');
const { isLoggedIn } = require('../middlewere/authtoken');


/**
 *  @route GET /User
 *  @desc Home Route
 *  @access Public
 */
router.get('/',isLoggedIn, UserHomeController)


/**
 *  @route GET /User/signup
 *  @desc Created the User
 *  @access Public
 */
 router.get('/signup', UserSingupController)

 
/**
 *  @route GET /User/signin
 *  @desc Login the User
 *  @access Public
 */
router.get('/login', UserSinginController)

module.exports = router;