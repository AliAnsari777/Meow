const multer = require('multer');
let address;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets/usersPhoto');
    },
    filename: function(req, file, cb) {
        address = 'profilePhoto-' + Date.now() + '.' + file.originalname;
        cb(null, address);
    }
});

module.exports.uploadPhoto = multer({ storage: storage, limits: { fieldSize: 3145728 } });