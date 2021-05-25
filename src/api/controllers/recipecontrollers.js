
const  { RecipeValidater } = require('../validations/recipevalidater')
const { CreateRecipeService,  SingleRecipeService, UpdateRecipeService, DeleteRecipeService} = require('../services/recipeservices')


exports.CreateRecipeController = (req, res, next) =>{
    console.log(`Recipe CreateRecipeController,${req.body}` );
    const { value, err } = RecipeValidater(req.body);
    if(err) return res.status(402).json({err: err.detils.map(err => err.massage)});
    CreateRecipeService(value)
        .then(recipe =>res.status(201).json({massage:'New Recipe Created', recipe}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}


exports.SingleRecipeController = (req, res, next) =>{
    SingleRecipeService(req.params.id)
        .then(recipe =>res.status(200).json({massage:'RecipeFound', recipe}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}


exports.ReadRecipeController = (req, res, next) =>{
    RingleRecipeService( )
        .then(recipes =>res.status(200).json({massage:'RecipeFound', recipes}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}

exports.UpdateRecipeController = (req, res, next) =>{
    console.log(`jewbjcbw,${req.body}` );
    const {value, err} = RecipeValidater(req.body);
    if(err) return res.status(402).json({err: err.detils.map(err => err.massage)});
    res.send(req.body);
    // res.send({value});
    console.log(`baad main,${req.body}`);
    UpdateRecipeService(req.params.id,value)
        .then(recipe =>res.status(200).json({massage:'Recipe Update', recipe}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}

exports.DeleteRecipeController = (req, res, next) =>{
    DeleteRecipeService(req.params.id)
        .then(recipe =>res.status(200).json({massage:'Recipe Deleted', recipe}))
        .catch(err =>res.status(501).json({massage:'Something Went Wrong', err}))
}