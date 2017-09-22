'use strict'
const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    res.send('你正在访问我的博客')
})

routes.get('/index.html', function(req, res) {
    res.send('你正在访问我的博客主页')
})

routes.get('/articles.html', function(req, res) {
    res.send('你正在访问我的博客文章')
})

module.exports = routes