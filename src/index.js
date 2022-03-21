const express = require('express');
const { config } = require('./config');
const app = express();
const routerApi = require('./routes/index.routes');
const PORT = process.env.PORT;

//router Index
app.use("/", routerApi);

app.listen(PORT, (req, res) => {
  console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})