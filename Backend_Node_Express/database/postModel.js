const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    text: { type: String, required: true },
    postDate: Date,
    status: { type: Boolean, required: true },
    postType: { type: String, required: true },
    petType: String,
    photo: String,
    gender: String,
    state: String,
    city: String,
    zipCode: String,
    date: Date,
    age: Number,
    startSittingDate: Date,
    endSittingDate: Date,
});

const postModel = mongoose.model('Posts', postSchema);

module.exports = postModel;