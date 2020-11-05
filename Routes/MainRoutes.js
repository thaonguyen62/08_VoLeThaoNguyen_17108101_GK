const express = require('express');
const route = express.Router();
const axios = require('axios');

route.get('', async(req,res)=>{
    var item = await axios.get('http://localhost:3000/api/GiuaKy');
    res.render('index', {Datatbl: item.data});
});


module.exports = route;