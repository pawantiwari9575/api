const router = require('express').Router();

const {
    CreateRecipeController,
    SingleRecipeController,
    ReadRecipeController,
    UpdateRecipeController,
    DeleteRecipeController
} = require('../controllers/recipecontrollers')


/**
 *  @route POST /recipe/recipe
 *  @desc Created the Recipe
 *  @access Public
 */
router.post('/create', CreateRecipeController)


/**
 *  @route /post/singlerecipe/:id
 *  @desc Updating he Recipe according to given id
 *  @access Public
 */
router.post('/singlerecipe/:id', SingleRecipeController)


/**
 *  @route POST /recipe/read
 *  @desc read all Recipe
 *  @access Public
 */
router.post('/read',ReadRecipeController)


/**
 *  @route PATCH /recipe/update/:id
 *  @desc update Existing Recipe according to given id
 *  @access Public
 */
router.post('/update/:id', UpdateRecipeController)

/**
 *  @route DELETE /recipe/delete/:id
 *  @desc Created the Recipe
 *  @access Publi POST 
 */
router.post('/delete/:id',DeleteRecipeController)


module.exports = router;


