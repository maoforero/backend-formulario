let { db } = require("./index");

var mysql = require('knex')({
  client: 'mysql',
  connection: {
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
  },
  pool: {min: 0, max: 7}
})