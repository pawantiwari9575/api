
const Joi = require('joi');

exports.RecipeValidater = (body) => {
    const joiSchema = Joi.object({
        dish: Joi.string().min(4).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          chef: Joi.string().min(4).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          discription: Joi.string().min(2).required()
          .messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
          image: Joi.string().min(4).required(),
          ingredentArray: Joi.string().min(4).required(),

          
      });
    return joiSchema.validate(body, { abortEarly: false });

}


