const express = require('express');
const router = express.Router();

//Importando controller Index
const controller = require('../controllers/index.controller');

router.get('/', controller.getIndex);

router.post('/', controller.postIndex);

router.put('/', controller.putIndex);

router.delete('/', controller.deleteIndex);


module.exports = router;