const express = require('express')
const router = express.Router()

const DashboardController = require('../controllers/DashboardController')

router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'server';
    next();
})

router.get('/', DashboardController.index)

module.exports = router