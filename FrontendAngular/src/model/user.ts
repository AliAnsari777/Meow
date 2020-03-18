export class user {
	name: String;
    email:  String;
    phone:  String;
    password:  String;
    userPhoto: String;
    pets: [{
        name: String,
        gender: String,
        age: Number,
        animalType: String,
        photo: File
    }]
}