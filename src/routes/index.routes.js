const express = require('express')
const router = express.Router()
const controller = require('../controller/index.controller')


router.get('/', controller.index)
router.get('/home', controller.home)
router.get('/alta', controller.mostrarProducto);
//router.post('/alta', controller.alta);
router.get('/contact', controller.contact)
router.get('/about', controller.about)

module.exports = router

