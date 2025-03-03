import React from 'react'
import { Container, Navbar, NavbarBrand,Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
      
      <Container>
        <NavbarBrand>MyShop</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><i className="fa-solid fa-cart-plus"></i> Cart</Nav.Link>

            <Nav.Link href="#SignIn"><i className="fa-solid fa-user"></i> SignIn</Nav.Link>
            </Nav></Navbar.Collapse>
      </Container>
      
      </Navbar></>
  )
}

export default Header