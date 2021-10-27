import Product from '../models/productModel.js'

const addProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ title: req.body.title })
        if (product) {
            res.status(400)
            throw new Error('Product is already exists')
        }
        const newProduct = new Product(req.body)
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export { addProduct, getAllProducts }
