const express = require('express')
const router = express.Router()

const SeminarController = require('../controllers/SeminarController')

router.post('/addSeminar', SeminarController.addSeminar)
router.get('/getSeminar', SeminarController.getSeminar)
router.delete('/deleteSeminar/:id&:file', SeminarController.deleteSeminar)
router.get('/searchSeminar/:id', SeminarController.searchSeminar)

module.exports = router