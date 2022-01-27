const express = require('express');
const app = express();
const PORT = 3000;

//router
const router = require('./routes');

app.use('/', (req, res) => {
  res.send('Server');
})

app.use('/', router)

app.listen(PORT, (req, res) => {
  console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})