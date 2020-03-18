var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// this is for login path
// router.post('/', controller.login)

//Added By AYA
router.get('/:postType', postController.getAllPosts); //get all posts
router.delete('/:id', postController.deletePost); //delete spacific one
router.post('/', postController.addPost); //add new post
router.get('/userposts/:email', postController.getPostsByUserEmail); //get posts for spacific user
////////////////////////////////////////////////

module.exports = router;