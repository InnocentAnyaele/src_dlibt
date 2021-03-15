const express = require('express')
const router =  express.Router()

const StudentController = require('../controllers/StudentController')

router.post('/register', StudentController.register)
router.post('/login', StudentController.login)
router.patch('/changePassword', StudentController.changePassword)


// router.post('/srclogin', AuthController.srclogin)
// router.post('/studentlogin', AuthController.studentlogin)



module.exports = router