const express = require('express')
const router = express.Router()

const PollController = require('../controllers/PollController')

router.post('/addPoll', PollController.addPoll)
router.get('/getPoll', PollController.getPoll)
router.delete('/deletePoll/:id', PollController.deletePoll)
router.post('/addPollOption/:id', PollController.addPollOption)
router.get('/getPollOption/:id', PollController.getPollOption)
router.post('/addVote/:id', PollController.addVote)
router.get('/getVote/:id', PollController.getVote)
router.get('/getVoteCount/:id', PollController.getVoteCount)
router.get('/getVoteList/:id', PollController.getVoteList)
router.post('/deleteVote/:id&:vote', PollController.deleteVote)

module.exports = router