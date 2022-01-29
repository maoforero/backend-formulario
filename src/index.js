const express = require('express');
const app = express();
const PORT = 3001;

//router
app.use(require('./routes/index.routes'));

app.listen(PORT, (req, res) => {
  console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})