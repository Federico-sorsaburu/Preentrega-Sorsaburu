import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
 

const Header = () => {
  return    <>
  <div></div>
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/category' >Ropa </Link>
        <Link to='/category' >Electrónica </Link>
        <Link to='/category' >Joyería </Link>
        
      </Nav>
     <CartWidget count="0"/>
    </Container>
     
  </Navbar>
  
</>;
};

export default Header;
