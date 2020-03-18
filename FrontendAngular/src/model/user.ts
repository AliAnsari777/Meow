export class user {
    name: String;
    email: String;
    phone: String;
    password: String;
    userPhoto: File;
    pets: [{
        _id: String,
        name: String,
        gender: String,
        age: Number,
        animalType: String,
        photo: File
    }]
}