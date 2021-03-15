const express = require('express')
const router =  express.Router()

const SrcController = require('../controllers/SrcController')

router.post('/register', SrcController.register)
router.post('/login', SrcController.login)
router.patch('/changePassword', SrcController.changePassword)

// router.post('/srclogin', AuthController.srclogin)
// router.post('/studentlogin', AuthController.studentlogin)

module.exports = router