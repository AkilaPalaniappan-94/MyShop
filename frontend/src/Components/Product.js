import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from './Rating';
import {Link} from 'react-router-dom';


const Product = ({product}) => {
  return (
    <>
    <div>
   <Card className='my-5 p-3 rounded'>
    <Link to={`/product/${product._id}`}>
    <Card.Img src={product.image} variant='top'></Card.Img></Link>
    <Card.Body>
    <Link to={`/product/${product._id}`}>
        <Card.Title>{product.name}</Card.Title></Link>
        <Card.Text as='h5'>${product.price}</Card.Text>
        <Rating value={product.rating} text={product.numReviews}></Rating>
    </Card.Body>
    </Card></div></>
  )
}

export default Product