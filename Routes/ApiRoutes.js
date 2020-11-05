const ApiController = require('../Controller/ApiController');
const express = require('express');
const route = express.Router();

route.get('/GiuaKy', ApiController.GetALL);
route.post('/GiuaKy', ApiController.Add);

module.exports= route;