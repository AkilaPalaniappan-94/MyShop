import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { productDetailsReducer, productListReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'
import { userLoginReducer } from './reducer/userReducer'

const rootReducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer
})


const carItemsFromLocalStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]
const userInfoFromLocalStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const sAddressFromLocalStorage=localStorage.getItem('sAddress')?JSON.parse(localStorage.getItem('sAddress')):{}
const initialState={
    cart:{cartItems:carItemsFromLocalStorage,
        shippingAddress:sAddressFromLocalStorage
    },
    userLogin:{userInfo:userInfoFromLocalStorage}
}

const store=configureStore({
    reducer:rootReducer,
    preloadedState:initialState
})

export default store