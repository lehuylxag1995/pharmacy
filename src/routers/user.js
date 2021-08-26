const express = require('express')
const router = express.Router()

//Controller
const HomeController = require('../controllers/HomeController')
const AboutController = require('../controllers/AboutController')
const ContactController = require('../controllers/ContactController')
const ShopController = require('../controllers/ShopController')

//Config middleware set layout for routes
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'client'
    next()
})

//set HTTP verbs for routes
router.get('/about', AboutController.index)
router.get('/shop', ShopController.index)
router.get('/contact', ContactController.index)
router.get('/home', HomeController.index)
router.get('/', HomeController.index)

module.exports = router
