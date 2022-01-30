const mongoose = require('mongoose');

const password = "pepe123";
const username = "pepe";

const uri = `mongodb+srv://<${username}>:<${password}>@dbch.yynea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

module.exports = () =>   mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@dbch.yynea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });