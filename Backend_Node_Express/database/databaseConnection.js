var mongoose = require('mongoose');

const uri = "mongodb+srv://AliAnsari:P@ssw0rd@meowdb-qcmgw.gcp.mongodb.net/MEOWDB?retryWrites=true&w=majority";

module.exports.connect = async function() { await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) };

mongoose.connection
    .on('error', console.error.bind(console, 'there is some problem'))
    .once('open', () => console.log('connected successfully'));