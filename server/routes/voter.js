const express = require('express')
const router = express.Router()

const VoterController = require('../controllers/VoterController')

router.post('/addVoter', VoterController.addVoter)
router.get('/getVoter', VoterController.getVoter)
router.delete('/deleteVoter/:id', VoterController.deleteVoter)

module.exports = router