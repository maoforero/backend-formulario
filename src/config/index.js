require("dotenv").config();


const config = {
  dev: process.env.NOD_ENV !== 'production'
}

const db = {
  dbHost: process.env,
  dbUSer: process.env,
  dbPass: process.env,
  dbName: process.env
}
module.exports = {config}