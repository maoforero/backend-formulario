const express = require('express');
const routerPro = require('./products.routes');
const routerMsn = require('./msn.routes');

//Importando controller Index

function routerApi(app){

  //master route
  const router = express.Router();
  app.use('/api', router)
  router.use('/msn', routerMsn)
  router.use('/products', routerPro);
}

module.exports = routerApi;