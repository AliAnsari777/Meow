const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodeoutlook = require('nodejs-nodemailer-outlook');
var generator = require('generate-password');

const databaseConnection = require('../database/databaseConnection');
const userModel = require('../database/userModel');
const postModel = require('../database/postModel');

databaseConnection.connect();

module.exports.getAll = async function(req, res) {


    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            userModel.find({}, (err, docs) => {
                res.json(docs);
            })
        }
    })

}

//used >> npm i jsonwebtoken
module.exports.login = async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    userModel.findOne({
        email: email
    }, (err, userdoc) => {


        if (userdoc) {
            bcrypt.compare(password, userdoc.password).then(function(result) {
                if (result) {
                    jwt.sign({ user: userdoc }, 'secretkey', { expiresIn: '50s' }, (err, token) => {
                        res.json({
                            email: userdoc.email,
                            token: token
                        })
                    });
                } else {
                    res.sendStatus(401);
                }
            });
        } else {
            res.sendStatus(401);
        }



    })


}

//used >> npm i bcrypt
module.exports.signup = async function(req, res) {
    const saltRounds = 10;
    const password = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            req.body.password = hash;
            let doc = new userModel(req.body);
            doc.save();
            res.json({
                result: 'Sign up Success'
            });
        });
    });

}

//used >> npm i nodejs-nodemailer-outlook & npm i generate-password
module.exports.resetPassword = async function(req, res) {
    const email = req.body.email;
    userModel.findOne({
        email: email
    }, (err, userdoc) => {
        if (userdoc) {
            //generate new password
            var newPassword = generator.generate({
                length: 10,
                numbers: true
            });
            //hash password
            const saltRounds = 10;
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(newPassword, salt, function(err, hash) {
                    //update password to database
                    userModel.updateOne({
                        email: email
                    }, {
                        password: hash
                    });

                    //send the new password via account email
                    nodeoutlook.sendEmail({
                        auth: {
                            user: "abdulrhman.radwan@outlook.com",
                            pass: "*******"
                        },
                        from: 'abdulrhman.radwan@outlook.com',
                        to: `${email}`,
                        subject: 'MEWO-Reset Password!',
                        html: `<b>Your Password is: ${newPassword}</b>`,



                        onError: (e) => {
                            console.log(e);
                            res.sendStatus(500)
                        },
                        onSuccess: (i) => res.sendStatus(200)
                    });
                });
            });



        } else {
            res.sendStatus(401);
        }
    });



}