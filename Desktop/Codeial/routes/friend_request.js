const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request_controller');


router.post('/sent',requestController.requestCreate);


module.exports=router;