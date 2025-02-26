import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { productDetailsReducer, productListReducer } from './reducer/productReducer'

const rootReducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer
})

const store=configureStore({
    reducer:rootReducer,
    preloadedState:[]
})

export default store