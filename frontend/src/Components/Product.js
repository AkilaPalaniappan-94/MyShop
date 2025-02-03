import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from './Rating';


const Product = ({product}) => {
  return (
    <>
    <div>
   <Card className='my-5 p-3 rounded'>
    
    <Card.Img src={product.image} variant='top'></Card.Img>
    <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text as='h5'>${product.price}</Card.Text>
        <Rating value={product.rating} text={product.numReviews}></Rating>
    </Card.Body>
    </Card></div></>
  )
}

export default Product