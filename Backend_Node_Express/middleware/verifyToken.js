const jwt = require('jsonwebtoken');
module.exports.verifyToken = function (req, res, next) {
    //get auth header value
    
    const BearerHeader = req.headers['x-access-token'];
   
    
    if (typeof BearerHeader != 'undefined') {
        //split at the space
        const Bearer = BearerHeader.split(' ');
        //get token from array
        const BearerToken = Bearer[1];
                
        //set the token
        req.token = BearerToken;
        //next middleware


        console.log(req.token);
        
        // verify
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                next();
            }
        })
       
    } else {
        res.sendStatus(403);
    }

}