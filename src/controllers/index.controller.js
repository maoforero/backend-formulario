
const IndexController = {}

IndexController.getIndex = (req, res) => {
  res.send('Server');
}

IndexController.postIndex = (req, res) => {
  res.send('Adding new Data...')
}

IndexController.putIndex = (req, res) => {
  res.send('Updating data Server');
}

IndexController.deleteIndex = (req, res) => {
  res.send('Deleting Data')
}



module.exports = IndexController;