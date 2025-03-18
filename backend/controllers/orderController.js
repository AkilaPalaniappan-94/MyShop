import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingaddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems.length === 0 && orderItems) {
    res.status(404);
    throw new Error("No Order Items");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingaddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const orderID = await order.save();
    res.status(201);
    res.json(orderID);
  }
});


export const findOrderById=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const order=await Order.findById(id).populate('user','name email')
    if (order){
        res.json(order)
    }
    else{
        res.status(404)
        throw new Error('order Not Found')
    }
})


export const orderPaidUpdate =asyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params.id)
    if (order){
        order.isPaid=true
        order.paidAt=Date.now()
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            update_Time:req.body.update_Time,
            emailAddress:req.body.emailAddress

        }

        const paidOrder= await order.save()
        res.json(paidOrder)
    }
    else{
        res.status(404)
        throw new Error('order not found')
    }
})
