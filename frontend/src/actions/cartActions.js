import axios from 'axios'
import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants"


export const addToCart=(id,qty)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${id}`)

    
    
    dispatch({
        type:ADD_TO_CART,
        payload:{
            product:data._id,
            image:data.image,
            name:data.name,
            price:data.price,
            countInStock:data.countInStock,
            qty

        }
    }


)
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}


export const removeFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}



export const saveShippingAddress=(data)=>async(dispatch)=>{
    dispatch({
        type:SAVE_SHIPPING_ADDRESS,
        payload:data
    })

    localStorage.setItem('sAddress',JSON.stringify(data))
}

