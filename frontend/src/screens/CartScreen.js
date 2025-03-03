import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'
import {Row,Col,ListGroup,ListGroupItem, Image} from 'react-bootstrap'
import Message from '../Components/Message'
import { Link } from 'react-router-dom'

const CartScreen = () => {
    const location=useLocation()
    const dispatch=useDispatch()
    const params=useParams()
    const productId=params.id

    const qty=location.search.qty ? Number((location.search.split("="))[1]):1
    useEffect(()=>{
        console.log("use Effect")
        dispatch(addToCart(productId,qty))

    },[dispatch,productId,qty])


    const cart=useSelector((state)=>state.cart)
    const {cartItems}=cart
    console.log("in cart screen"+ cartItems)
    console.log("cartItems Length"+cartItems.length)
    
  return (
    <>
    {
        cartItems.map(
            item=>
            
             <Row>
        <Col >
        {cartItems.length === 0 ?
        (<Message>Cart is Empty!!!<Link to='/'>continue Shopping</Link></Message>
            
        ):

        (
            <ListGroup >{
                cartItems.map(item=>(
                    <ListGroupItem key={item.product}>
                            <Row>
                                <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid rounded ></Image></Col>
                                <Col md={4}>
                                <Link to={`/product/${item.product}`}>{item.name}</Link>

                                </Col>
                                <Col md={4}>
                                ${item.price}
                                </Col>

                                
                            </Row>


                    </ListGroupItem>
                ))
            }
      
    </ListGroup>
        )

            }
        </Col>
    </Row>

            
        )
    }

    </>
  )
}

export default CartScreen