import { protect } from "../middleware/authMiddleware.js";
import express from 'express';
import { addOrderItems } from "../controllers/orderController.js";

 const router=express.Router()
//@desc Add Order Items in to db
//@route /api/orders/
//@access protected
 router.route('/').post(protect,addOrderItems)

export default router