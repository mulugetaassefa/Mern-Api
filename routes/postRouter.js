const express =require("express");
const postController = require('../controllers/postController');

const { identifier } =require('../middleware/identification')
const router =express.Router();

 
router.get('/all-posts', identifier, postController.getPosts);
router.get('/single-post', postController.singlePost);
router.post('/create-post',  identifier, postController.createPost);


router.put('update-post', postController.updatePost);
router.delete('/delete-post', postController.deletePost);


module.exports=router;