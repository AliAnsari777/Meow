var express = require('express');
var router = express.Router();

const controller = require('../controllers/userControllers');



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', controller.signup);

// this is for login path
// router.post('/', controller.login)


module.exports = router;