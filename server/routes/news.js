const express = require('express')
const router = express.Router()

const NewsController = require('../controllers/NewsController')

router.post('/addNews', NewsController.addNews)
router.get('/getNews', NewsController.getNews)
router.delete('/deleteNews/:id', NewsController.deleteNews)
router.get('/searchNews/:id', NewsController.searchNews)

module.exports = router