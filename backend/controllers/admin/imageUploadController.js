const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../../images');
        // Ensure directory exists
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        // Get the product title from request body
        const productTitle = req.body.title || 'product';

        // Sanitize the filename (remove special characters and spaces)
        const sanitizedTitle = productTitle
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');

        // Get file extension
        const ext = path.extname(file.originalname);

        // Create filename: productname-timestamp.ext
        const filename = `${sanitizedTitle}-${Date.now()}${ext}`;

        cb(null, filename);
    }
});

// File filter for images only
const fileFilter = (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed.'), false);
    }
};

// Configure multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    }
});

// Upload single image endpoint
const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                data: null,
                message: 'No image file provided'
            });
        }

        // Return the image URL that can be used to access the image
        const imageUrl = `${req.protocol}://${req.get('host')}/static/${req.file.filename}`;

        res.status(200).json({
            data: {
                filename: req.file.filename,
                imageUrl: imageUrl,
                originalName: req.file.originalname,
                size: req.file.size
            },
            message: 'Image uploaded successfully'
        });

    } catch (error) {
        res.status(500).json({
            data: null,
            message: 'Error uploading image'
        });
    }
};

// Delete image endpoint
const deleteImage = async (req, res) => {
    try {
        const { filename } = req.params;
        const imagePath = path.join(__dirname, '../../images', filename);

        // Check if file exists
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
            res.status(200).json({
                data: null,
                message: 'Image deleted successfully'
            });
        } else {
            res.status(404).json({
                data: null,
                message: 'Image not found'
            });
        }

    } catch (error) {
        res.status(500).json({
            data: null,
            message: 'Error deleting image'
        });
    }
};

module.exports = {
    upload,
    uploadImage,
    deleteImage
};