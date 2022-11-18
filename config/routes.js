const express = require('express')
const route = express.Router()
const control = require('../controller/control')

route.get('/', control.landing)
route.all('/feed', control.home)
route.get('/feed/:abboud', control.viewOne) 
route.get('/delete/:sam', control.tributeToDelete)
route.all('/feed/edit/:id', control.editFeed)

module.exports = route
