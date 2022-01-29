const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('server get');
})

router.post('/', (req, res) =>{
  res.send('server post')
})

router.put('/', (req, res) =>{
  res.send('server put')
})

router.delete('/', (req, res) =>{
  res.send('server delete')
})


module.exports = router;