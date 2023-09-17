const express = require('express');
const router = express.Router();
const { Messages } = require("../models");

router.get('/', async (req, res) => {
    const dataList = await Messages.findAll();
    res.json(dataList);
})

router.post('/', async (req, res)=>{
    const data = req.body;
    await Messages.create(data);
    res.json(data);
})

module.exports = router;