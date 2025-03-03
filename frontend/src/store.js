import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { productDetailsReducer, productListReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'

const rootReducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})


const carItemsFromLocalStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]
console.log(carItemsFromLocalStorage)
const initialState={
    cart:{
        cartItems:carItemsFromLocalStorage
    }
}

const store=configureStore({
    reducer:rootReducer,
    preloadedState:initialState
})

export default store