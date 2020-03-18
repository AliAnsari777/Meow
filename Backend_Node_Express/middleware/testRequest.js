module.exports.testRequest = function(req, res, next) {
    console.log(req.body);
    console.log(req);

    next();
}