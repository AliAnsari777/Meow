const databaseConnection = require('../database/databaseConnection');
const userModel = require('../database/userModel');
const postModel = require('../database/postModel');

databaseConnection.connect();

module.exports.signup = async function(req, res) {
    let doc = new userModel(req.body);
    doc.save();

    res.send('saved successfully');
}