const express = require('express')
const router = express.Router()

const MessageController = require('../controllers/MessageController')

router.post('/addMessage', MessageController.addMessage)
router.get('/getMessage', MessageController.getMessage)
router.delete('/deleteMessage/:id', MessageController.deleteMessage)

module.exports = router