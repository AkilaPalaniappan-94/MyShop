import React from 'react'
import { Container, } from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer>
      <Container>
      <Row className='text-center py-3'>
       <Col> Copyright &copy; MyShop</Col>
      </Row>
      </Container>
      </footer></>
  )
}

export default Footer