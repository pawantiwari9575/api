
const Recipe = require('../models/recipeschema');

exports.CreateRecipeService= (body) => {
    console.log(body)
    const { dish, image, description, chef, ingredentArray } = body;
    const newRecipe = new Recipe({ dish,chef, image, description, ingredentArray });

    return new Promise((resolve, reject) => {
        Recipe.findOne({dish})
        .then((recipe) =>{
            if(reipess) return reject('Recipe alrady exitis');
            newRecipe.save()

            .then(recipeCreated =>  reslove(recipeCreated))
            .catch(err => reject(err));
        }).catch((err) =>reject(err))
        reslove(newRecipe);
    })
}

exports.SingleRecipeService= (id) => {
    return new Promise((resolve, reject) => {
        Recipe.findOne({_id:id})
        .then(recipeFound => resolve(recipeFound)).catch((err) =>reject(err))
    })
}

exports.ReadRecipeService= () => {
    return new Promise((resolve, reject) => {
        Recipe.findOne({_id:id})
        .then(recipesFound => resolve(recipesFound)).catch((err) =>reject(err))
    })
}

exports.UpdateRecipeService= (id, body) => {
    console.log(body)
    const { dish, image, description, chef, ingredentArray } = body;
    const UpdateRecipe = new Recipe({ dish,chef, image, description, ingredentArray });

    return new Promise((resolve, reject) => {
        Recipe.findOne({_id:id},{$set: UpdateRecipe }, {new : true})
            .then(recipeUpdated =>  reslove(recipeUpdated))
            .catch(err => reject(err))
    })
}

exports.DeleteRecipeService= (id) => {
    return new Promise((resolve, reject) => {
        Recipe.findOneAndDelete({_id:id})
        .then(recipeFound => resolve(recipeFound)).catch((err) =>reject(err))
    })
}
