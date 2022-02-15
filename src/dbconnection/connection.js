const mongoose = require('mongoose');

const password = "pepe123";
const username = "pepe";

const uri = `mongodb+srv://<${username}>:<${password}>@dbch.yynea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

module.exports = () =>   mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
