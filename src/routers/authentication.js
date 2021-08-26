const express = require('express')
const router= express.Router()

const Authentication=require('../controllers/AuthenController')

// http://localhost:3000/account

router.get('/login',Authentication.viewLogin)
router.get('/register',Authentication.viewRegister)
router.post('/login',Authentication.checkLogin)
router.post('/register',Authentication.checkRegister)

module.exports = router