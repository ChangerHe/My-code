'use strict'
const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/', function(req, res) {
    var data = fs.readFileSync('../public/index.html')
    res.send(data)
})

module.exports = router