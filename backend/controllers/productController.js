const product = require("../models/product")

const getAllProducts = async (req, res) => {
    try {
        const products = await product.find().select("_id title picture price category rating").populate("category");
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getFeaturedProducts = async (req, res) => {
    try {
        const products = await product.find({ featured: true }).select("_id title picture price category rating").populate("category");
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getProductByCategory = async(req , res) => {
    const {categoryId} = req.params;
    try {
        const products = await product.find({ category: categoryId }).select("_id title picture price category rating").populate("category");
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const getProductById = async(req , res) => {
    const {productId} = req.params;
    try {
        const product = await product.findById(productId).select("_id title picture price category rating").populate("category");
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    getAllProducts,
    getFeaturedProducts,
    getProductByCategory,
    getProductById
};
