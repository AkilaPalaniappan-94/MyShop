import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
    const location=useLocation()
    const dispatch=useDispatch()
    const params=useParams()
    const productId=params.id

    const qty=location.search.qty ? Number((location.search.split("="))[1]):1
    useEffect(()=>{
        console.log("use Effect")
        dispatch(addToCart(productId,qty))

    },[dispatch,productId,qty])


    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart
    console.log("in cart screen"+ cartItems)
    
  return (
    <>
    {
        cartItems.map(
            item=>
            (<><h1>{item.product}</h1>
            <h5>{item.qty}</h5>
            </>
            )
        )
    }

    </>
  )
}

export default CartScreen