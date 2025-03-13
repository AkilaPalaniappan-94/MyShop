import express from 'express'
import { getProducts,getProductsById } from '../controllers/productControllers.js'


const router=express.Router()
//@desc Fetch all products
//@route GET/api/products/
//@access public
router.get('/',getProducts)


//@desc Fetch product by Id
//@route GET/api/products/:id
//@access Public
router.get('/:id',getProductsById)


export default router