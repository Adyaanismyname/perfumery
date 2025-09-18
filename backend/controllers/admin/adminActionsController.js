const admin = require("../../models/admin")
const Product = require("../models/product")


const editProduct = async(req, res) => {
    const {updatedProduct} = req.body; 
    try{
        const prodID = updatedProduct._id
        let product = await Product.findOne({_id : prodID});

        if(!product){
            return res.status(404).json({data: null, message: `Product with ID (${prodID}) not found`});
        }
        product = updatedProduct;

        await Product.save();
        
        return res.status(200).json({data:product, message: `Product (${prodID}) updated successfully`});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: 'server error'});

    }
}

const addProduct = async (req, res) =>{
    const {newProduct} = req.body;
    try{
        const newProd = new Product(newProduct);
        await Product.save();
        return res.status(200).json({data: newProduct, message:'New product made'});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: 'server error'});

    }
}

const deleteProduct = async (req, res) =>{
    const {newProduct} = req.body;
    try{
        const newProd = new Product(newProduct);
        await Product.save();
        return res.status(200).json({data: newProduct, message:'New product made'});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: 'server error'});

    }
}