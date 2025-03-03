import React, { useEffect } from 'react';
import Product from '../Components/Product';

import {Row,Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../actions/productActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';



const HomeScreen = () => {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(fetchProductList())
},[dispatch])

const productList=useSelector(state=>state.productList)
const{loading,products,error}=productList

  return (
    <>{
        loading?<Loader/>:error?<Message variant="danger">{error}</Message>
       :(<Row>
       
        {products.map( p=>(
        <Col key={p._id} sm={12} lg={4} md={6} xl={3}>
                <Product product={p}></Product>
                
                </Col>
        ))}
        
        </Row>)
    
}
    </>
  )
}

export default HomeScreen