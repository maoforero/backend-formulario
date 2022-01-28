const express = require('express');
const { Router } = express;
const routerPro = new Router;

routerPro.get('/producto', (req, res) => {
  res.send('producto');
})

routerPro.post('/producto', (req, res) =>{
  res.send('post')
})

routerPro.put('/producto', (req, res) =>{
  res.send('put')
})

routerPro.delete('/producto', (req, res) =>{
  res.send('delete')
})


module.exports = routerPro;