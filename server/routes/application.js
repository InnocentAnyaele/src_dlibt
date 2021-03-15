const express = require('express')
const router = express.Router()

const ApplicationController = require('../controllers/ApplicationController')

router.post('/addApplication', ApplicationController.addApplication)
router.get('/getApplication', ApplicationController.getApplication)
router.delete('/deleteApplication/:id&:file', ApplicationController.deleteApplication)

module.exports = router