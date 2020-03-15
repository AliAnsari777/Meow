var express = require('express');
var router = express.Router();

const controller = require('../controllers/userControllers');
const {verifyToken} = require('../middleware/verifyToken')



/* GET users listing. */

//update by Abdulrhman 15-3-2020
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
router.get('/getAll',verifyToken, controller.getAll);
router.get('/login', controller.login);
router.get('/resetPassword',controller.resetPassword);
router.post('/', controller.signup);

// this is for login path
// router.post('/', controller.login)


module.exports = router;