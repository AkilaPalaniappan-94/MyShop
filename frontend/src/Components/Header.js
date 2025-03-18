import React from 'react'
import { Container, Navbar, NavbarBrand,Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../actions/userActions'

const Header = () => {
  const dispatch=useDispatch()
  const {userInfo}=useSelector(state=>state.userLogin)
  const logoutHandler=()=>{
    dispatch(logOut())
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
      
      <Container>
        <NavbarBrand>MyShop</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart"><i className="fa-solid fa-cart-plus"></i> Cart</Nav.Link>
            {userInfo?(
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ):
            <Nav.Link href="/login"><i className="fa-solid fa-user"></i> SignIn</Nav.Link>}
            </Nav></Navbar.Collapse>
      </Container>
      
      </Navbar></>
  )
}

export default Header