const express = require('express');
const router = express.Router();
const { Bootcamps } = require("../models");

router.get('/', async (req, res) => {
    const dataList = await Bootcamps.findAll();
    res.json(dataList);
})

router.post('/', async (req, res)=>{
    const data = req.body;
    await Bootcamps.create(data);
    res.json(data);
})

module.exports = router;