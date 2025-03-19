import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../Components/FormContainer'
import { Button, Form } from 'react-bootstrap'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = () => {
    const dispatch=useDispatch()
    const navigate =useNavigate()

    const {shippingAddress}=useSelector(state=>state.cart)
    const [address,setAddress]=useState(shippingAddress.address)
    const [city,setCity]=useState(shippingAddress.city)
    const [postalCode,setPostalCode]=useState(shippingAddress.postalCode)
    const [country,setCountry]=useState(shippingAddress.country)

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("submit complete")
        dispatch(saveShippingAddress({address,city,postalCode,country}))
        navigate('/payment')
    }

  return (
    <>
    <FormContainer>
        <Form>
        <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" value={address} required onChange={e=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" value={city} required onChange={e=>setCity(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postalCode">
        <Form.Label>postal code</Form.Label>
        <Form.Control type="text" placeholder="Enter postal code" value={postalCode} required onChange={e=>setPostalCode(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Enter Country" value={country}  required onChange={e=>setCountry(e.target.value)} />
      </Form.Group>
        </Form>

        <Button type="submit" onClick={submitHandler}>Save Shipping Address</Button>

    </FormContainer>
    
    </>
  )
}

export default ShippingScreen