const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/AdminController')
const AboutController = require('../controllers/AboutController')

router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'server'
    next()
})

router.get('/', AdminController.index)
router.get('/about', AboutController.listAbout)
router.get('/about/add', AboutController.viewAddAbout)
router.post('/about/add', AboutController.store)

module.exports = router
