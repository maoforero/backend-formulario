const express = require('express');
const routerPro = express.Router();

routerPro.get('/', (req, res) => {
  res.send('get producto');
})

routerPro.post('/', (req, res) => {
  res.send('post producto');
})

routerPro.put('/', (req, res) => {
  res.send('put producto');
})

routerPro.delete('/', (req, res) => {
  res.send('delete producto');
})

module.exports = routerPro;