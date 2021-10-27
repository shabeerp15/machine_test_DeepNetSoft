import express from 'express'
const router = express.Router()
import { addProduct, getAllProducts } from '../controllers/productController.js'

router.route('/').post(addProduct).get(getAllProducts)

export default router
