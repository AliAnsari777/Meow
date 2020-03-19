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
router.post('/login', controller.login);
router.get('/resetPassword', controller.resetPassword);
router.post('/', controller.signup);

router.post('/addPet/:des/:email', verifyToken, uploadPhoto.single('photo'), controller.addPet);
router.put('/editProfile/:email', verifyToken, controller.updateProfile);


//ALI
router.post('/addPet/:des/:email', verifyToken, uploadPhoto.single('photo'), controller.addPet);
router.put('/editProfile/:des/:email', verifyToken, uploadPhoto.single('userPhoto'), controller.updateProfile);
router.get('/:email', verifyToken, controller.findUserByEmail);
router.get('/findProfile/:email', verifyToken, controller.findUserProfile);

//AYA

router.get('/:email', verifyToken, controller.findUserByEmail);
router.get('/userpets/:email', verifyToken, controller.findUserByEmail);
router.delete('/userpets/:id', verifyToken, controller.deletePet);

module.exports = router;