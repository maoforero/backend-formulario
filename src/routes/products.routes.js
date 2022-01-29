const express = require('express');
const routerPro = express.Router();

//Controller products
const Controller = require('../controllers/products.controller');


routerPro.get('/', Controller.getProducts);

routerPro.post('/', Controller.postProducts);

routerPro.put('/', Controller.putProducts);

routerPro.delete('/', Controller.deleteProducts);

module.exports = routerPro;