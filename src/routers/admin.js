const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/AdminController')
const AboutController = require('../controllers/AboutController')

//middleware for router
router.all('/*', function (req, res, next) {
    //Set layout for template
    req.app.locals.layout = 'server'
    next()
})

router.get('/', AdminController.index)
router.get('/about', AboutController.listAbout)
router.get('/about/add', AboutController.viewAddAbout)
router.post('/about/store', AboutController.store)

module.exports = router
