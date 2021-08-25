const express = require('express')
const router= express.Router()

const Authentication=require('../controllers/AuthenController')

router.get('/',Authentication.viewLogin)

module.exports = router