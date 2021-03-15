const express = require('express')
const router = express.Router()


const GalleryController = require('../controllers/GalleryController')

router.post('/addGallery', GalleryController.addGallery)
router.get('/getGallery', GalleryController.getGallery)
router.delete('/deleteGallery/:id&:file', GalleryController.deleteGallery)

module.exports = router