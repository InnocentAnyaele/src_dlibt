const express = require('express')
const router = express.Router()

const HandoutController = require('../controllers/HandoutController')

router.post('/addHandout', HandoutController.addHandout)
router.get('/getHandout', HandoutController.getHandout)
router.delete('/deleteHandout/:id&:file', HandoutController.deleteHandout)
router.get('/searchHandout/:id', HandoutController.searchHandout)

module.exports = router