const productsController = {}

productsController.getProducts = (req, res) => {
  res.send('Get Products');
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