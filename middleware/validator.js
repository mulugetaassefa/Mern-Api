const Joi = require('joi');


exports.signupSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .max(60)
    .email() 
    .required(),

  password: Joi.string()
    .min(6) // Add a sensible minimum length
   .pattern(new RegExp('^(?=.*[a-z])(?=.*[@$!%*?&])[a-z@$!%*?&]{6,}$'))
    .required()
});




exports.signinSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .max(60)
    .email()
    .required(),

  password: Joi.string()
    .min(6)
   .pattern(new RegExp('^(?=.*[a-z])(?=.*[@$!%*?&])[a-z@$!%*?&]{6,}$'))
    .required()
});


exports.acceptCodeSchema =Joi.object( {
    email:Joi.string()
    .min(6)
    .max(60)
    .required()
    .email({}),
    providedCode:Joi.number().required(),
});


exports.changedPasswordSchema =Joi.object({ 
     newPassword:Joi.string()
     .required()
     .pattern(new RegExp(('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')))
    
     
   
});


exports.acceptFPCodeSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			 }),
	providedCode: Joi.number().required(),
	newPassword: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[!@#$%^&*()_+\\-={}\\[\\]|;:"<>,.?/~`])(?=.*\\d).{8,}$')),
});

exports.createPostSchema = Joi.object({
	title: Joi.string().min(3).max(60).required(),
	description: Joi.string().min(3).max(600).required(),
	userId: Joi.string().required(),
});







