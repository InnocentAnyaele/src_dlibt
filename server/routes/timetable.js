const express = require('express')
const router = express.Router()

const TimetableController = require('../controllers/TimetableController')

router.post('/addTimetable', TimetableController.addTimetable)
router.get('/getTimetable', TimetableController.getTimetable)
router.delete('/deleteTimetable/:id&:file', TimetableController.deleteTimetable)
router.get('/searchTimeTable/:id', TimetableController.searchTimetable)

module.exports = router