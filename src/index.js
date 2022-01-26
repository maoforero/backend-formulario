const express = require('express');
const app = express();

const PORT = 3000;


app.use('/', (req, res) => {
  res.send('Server')
})

app.listen(PORT, (req, res) => {
  console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})