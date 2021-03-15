const express = require('express')
const router = express.Router()

const InfoController = require('../controllers/InfoController')

router.post('/addInfo', InfoController.addInfo)
router.get('/getInfo', InfoController.getInfo)
router.delete('/deleteInfo/:id', InfoController.deleteInfo)
router.get('/searchInfo/:id', InfoController.searchInfo)

module.exports = router