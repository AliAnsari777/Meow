var express = require('express');
var router = express.Router();

const controller = require('../controllers/userControllers');
const { verifyToken } = require('../middleware/verifyToken');
const { uploadPhoto } = require('../middleware/savePhoto');
const { testRequest } = require('../middleware/testRequest');

/* GET users listing. */

//update by Abdulrhman 15-3-2020
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
router.get('/getAll', verifyToken, controller.getAll);
router.get('/login', controller.login);
router.get('/resetPassword', controller.resetPassword);
router.post('/', controller.signup);
router.post('/addPet/:des/:email', uploadPhoto.single('photo'), controller.addPet);
router.put('/editProfile/:des/:email', uploadPhoto.single('photo'), controller.updateProfile);
router.get('/:email', controller.findUserByEmail);
router.get('/findProfile/:email', controller.findUserProfile);


module.exports = router;