const express = require('express');
const router = express.Router();
const { Users } = require("../models");

router.get('/', async (req, res) => {
    const dataList = await Users.findAll();
    res.json(dataList);
})

router.post('/', async (req, res)=>{
    const data = req.body;
    await Users.create(data);
    res.json(data);
})

module.exports = router;