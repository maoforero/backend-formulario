const express = require('express');
const app = express();
const PORT = 3001;

//router Index
app.use(require('./routes/index.routes'));

//router Productos
app.use('/productos', require('./routes/products.routes'));


app.listen(PORT, (req, res) => {
  console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})