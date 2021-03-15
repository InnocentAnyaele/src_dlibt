const express = require('express')
const router = express.Router()

const WelcomeController = require('../controllers/WelcomeController')

router.put('/changeMessage/:id', WelcomeController.changeMessage)
router.get('/getMessage', WelcomeController.getMessage)
router.post('/addMessage', WelcomeController.addMessage)

module.exports = router