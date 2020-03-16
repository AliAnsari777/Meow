const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    userPhoto: String,
    pets: [{
        name: String,
        gender: String,
        age: Number,
        animalType: String,
        photo: String
    }]
});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;