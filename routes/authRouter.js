const express =require("express");
const authController = require("../controllers/authController");
const { identifier } =require('../middleware/identification')
const router =express.Router();


router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.delete('/deleteUser',identifier, authController.deleteUser);
 
router.patch('/send-verification-code',identifier,authController.sendVerificationCode);
router.patch('/verify-verfication-code', identifier, authController.verifyVerificationCode);
router.patch('/change-password',authController.changePassword);
router.patch('/send-forgot-password-code', authController.sendForgotPasswordCode);
router.patch('/verify-forgot-password-code',authController.verifyForgotPasswordCode);
module.exports=router;