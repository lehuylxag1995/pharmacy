const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/AdminController')

router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'server'
    next()
})

router.get('/', AdminController.index)
router.get('/about', AdminController.listAbout)

module.exports = router
