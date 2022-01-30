const express = require('express');
const app = express();
const routerApi = require('./routes/index.routes');
const PORT = 3001;


//router Index
routerApi(app);

app.listen(PORT, (req, res) => {
  console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})