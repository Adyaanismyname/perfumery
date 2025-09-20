const express = require('express');
const router = express.Router();
const { upload, uploadImage, deleteImage } = require('../controllers/admin/imageUploadController');

// Upload single image
router.post('/upload', upload.single('image'), uploadImage);

// Delete image
router.delete('/:filename', deleteImage);

module.exports = router;