const productsController = {}
const connection = require('../dbconnection/connection');
const productsModel = require('../models/products.models');


productsController.getProducts = async (req, res) => {
  try{
    await connection();
    const allProducts = await productsModel.find();
    res.send('productos')
  }catch(err){
    console.error(err);
  }
}

productsController.postProducts = (req, res) => {
  res.send('Adding new Products...');
}

productsController.putProducts = (req, res) => {
  res.send('Changing Products...')
}

productsController.deleteProducts = (req, res) => {
  res.send('Deleting products');
}

module.exports = productsController;