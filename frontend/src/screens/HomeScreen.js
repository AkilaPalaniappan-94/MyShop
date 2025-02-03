import React from 'react';
import Product from '../Components/Product';
import products from '../products'
import {Row,Col} from 'react-bootstrap';



const HomeScreen = () => {
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