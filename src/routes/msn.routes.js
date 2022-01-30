const express = require('express');
const routerMsn = express.Router();
const MsnController = require('../controllers/msn.controller');

routerMsn.get('/', MsnController.getIMsm);

routerMsn.post('/', MsnController.postMsm);

routerMsn.put('/', MsnController.putMsn);

routerMsn.delete('/', MsnController.deleteMsn);


module.exports = routerMsn;


