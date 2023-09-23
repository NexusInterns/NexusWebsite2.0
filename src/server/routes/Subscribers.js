const express = require('express');
const router = express.Router();
const { Subscribers } = require("../models");

router.get('/', async (req, res) => {
    const dataList = await Subscribers.findAll();
    res.json(dataList);
})

router.post('/', async (req, res)=>{
    const data = req.body;
    await Subscribers.create(data);
    res.json(data);
})

module.exports = router;