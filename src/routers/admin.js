const express = require('express')
const router = express.Router()

router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'admin';
    next();
})

module.exports = router