
const mongoose =require('mongoose');

const userSchema =mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minLength:[5,"Email must be minumum length 5"],
        lowercase:true,
    },
   password: {
    type:String,
    required:[true,"password must be provided"],
    trim:true,
    select:false,
   },
   verified: {
			type: Boolean,
			default: false,
		},
		verificationCode: {
			type: String,
			select: false,
		},
		verificationCodeValidation: {
			type: Number,
			select: false,
		},
   forgotPasswordCode: {
    type:String,
    select:false,
   },
    forgotPasswordCodeValidation: {
    type:Number,
    select:false,
   },
},
   {timestamps:true},
);

module.exports =mongoose.model('User',userSchema);

