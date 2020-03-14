var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AliAnsari:P@ssw0rd@meowdb-qcmgw.gcp.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true });


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/testMongo', function(req, res, next) {
    console.log("before");

    client.connect(err => {
        console.log("inside");

        const collection = client.db("MEOWDB").collection("Users");
        collection.find({}).toArray((err, docs) => console.log(docs))
        client.close();
    });
});



module.exports = router;