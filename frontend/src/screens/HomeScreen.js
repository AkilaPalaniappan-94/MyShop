import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';
import axios from 'axios';
import {Row,Col} from 'react-bootstrap';



const HomeScreen = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
const fetchProducts=async()=>{
  const {data}=await axios.get('/api/products')
  setProducts(data)
}

fetchProducts()
})

  return (
    <>{
        
       <Row>
       
        {products.map( p=>(
        <Col sm={12} lg={4} md={6} xl={3}>
                <Product product={p}></Product>
                
                </Col>
        ))}
        
        </Row>
    
}
    </>
  )
}

export default HomeScreen