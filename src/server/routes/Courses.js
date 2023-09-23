const express = require('express');
const router = express.Router();
const { Courses } = require("../models");

router.get('/', async (req, res) => {
    const dataList = await Courses.findAll();
    res.json(dataList);
})

router.post('/', async (req, res)=>{
    const data = req.body;
    await Courses.create(data);
    res.json(data);
})

module.exports = router;