module.exports.verifyToken = function (req, res, next) {
    //get auth header value
    const BearerHeader = req.headers['authorization'];
    const Bearer = BearerHeader.split(' ');
    //check if bearer is undefined
    if (typeof BearerHeader != 'undefined') {
        //split at the space
        const Bearer = BearerHeader.split(' ');
        //get token from array
        const BearerToken = Bearer[1];
        //set the token
        req.token = BearerToken;
        //next middleware
        next();
    } else {
        res.sendStatus(403);
    }

}