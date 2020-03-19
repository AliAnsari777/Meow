const databaseConnection = require('../database/databaseConnection');
const postModel = require('../database/postModel');

databaseConnection.connect();

//get all posts according to post type
module.exports.getAllPosts = async function (req, res) {
    postModel.find({ postType: req.params.postType }, function (err, postDoc) {
        console.log(postDoc);
        res.json(postDoc);
    });
}

//delete post by ID
module.exports.deletePost = async function (req, res) {

    postModel.deleteOne({ _id: req.params.id }, function (err, postDoc) {
        if (err) return handleError(err);
        res.json(postDoc);
    });
}


module.exports.addPost = async function (req, res) {
    let postDoc = new postModel(req.body);
    postDoc.save();
    res.json(postDoc);
}

//get posts for each user
module.exports.getPostsByUserEmail = async function (req, res) {
    postModel.find({ email: req.params.email }, function (err, postDoc) {
        res.json(postDoc);
    });
}

//get all responders to spacific post
module.exports.getAllResponders = async function (req, res) {
    postModel.find({ "responder._id": req.params.postID }, function (err, postDoc) {
        res.json(postDoc);
        console.log("+++++++++++++++++++++")
        console.log(postDoc)
    });
}