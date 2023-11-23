import Joi from "joi";

/**
 * @HELPER
 * @type object
 * @desc schema that defines custom Error Messages
 *
 **/
const customErrorMessages = {
    "string.base": "The {#label} field must be a valid string,{#label}",
    "string.pattern.base": "Password cannot conStain spaces,{#label}",
    "string.min":
        "The {#label} field must be at least {#limit} characters long,{#label}",
    "string.max":
        "The {#label} field must not exceed {#limit} characters.,{#label}",
    "string.email": "The email address is not valid.,{#label}",
    "any.required": "The {#label} field is required.,{#label}",
    "string.empty": "the {#label} Field cannot be empty,{#label}",
    "number.base": "The {#label} field must be a valid id.,{#label}"
};

/**
 * @HELPER
 * @type object
 * @desc schemas for validating the request body when creating and updating
 *
 **/

/**
 * @Succurcal
 */
const PostSchema = Joi.object({
    title: Joi.string().required().messages(customErrorMessages),
    message: Joi.string().required().messages(customErrorMessages),
    creator: Joi.string().required().messages(customErrorMessages),
    image: Joi.string().required().messages(customErrorMessages),
    tags: Joi.string().required().messages(customErrorMessages)
});

/**
 * @HELPER
 * @type function
 * @params schema , req.body object
 * @desc function validate sheama either return message or null , takes two parameter schema and req.body object
 *
 **/

const validator = (schema, data) => {
    const { error } = schema.validate(data);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        throw new Error(errors);
    }
};

export { PostSchema, validator };
