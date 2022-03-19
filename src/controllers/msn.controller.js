
const MsnController = {}

MsnController.getIMsm = (req, res) => {
  res.send('Server');
}

MsnController.postMsm = (req, res) => {
  res.send('Adding new Data...')
}

MsnController.putMsn = (req, res) => {
  res.send('Updating data Server');
}

MsnController.deleteMsn = (req, res) => {
  res.send('Deleting Data')
}

module.exports = MsnController;