import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';
import { Link } from 'react-router-dom';
import { Col, Container,Row,Card, ListGroupItem,Button} from 'react-bootstrap';
import {Image,ListGroup } from 'react-bootstrap'
import Rating from '../Components/Rating';
const ProductScreen = () => {
const params= useParams();
const product=products.find(p=>p._id===params.id);
  return (
    <>
    
    <Container>
    <Link to='/'>Go Back</Link>
        <Row>
            <Col md={6}>
            <Image src={product.image} fluid />
            
            </Col>
            <Col md={3}>
            <ListGroup>
                <ListGroup.Item><strong>{product.name}</strong></ListGroup.Item>
                <ListGroup.Item>{product.category}</ListGroup.Item>
                <ListGroup.Item>${product.price}</ListGroup.Item>
                <ListGroup.Item><Rating value={product.rating} text={product.numReviews}></Rating></ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>

            </Col>
            <Col md={3}>
            <Card>
            <ListGroup variant='flush'>
                <ListGroupItem>
                <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                </Row>
                </ListGroupItem>
                <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock>0 ? 'In Stock': 'Out of Stock'}</Col>
                </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>
                        <Button variant="primary" disabled={product.countInStock===0}>Add to Cart</Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
            </Card>
            </Col>

        </Row>
    </Container>
    </>
  )
}

export default ProductScreen