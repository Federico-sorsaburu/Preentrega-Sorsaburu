import React from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, useNavigate } from "react-router-dom";
 

const Header = () => {
  const navigate = useNavigate()
  return    <>
  <div></div>
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
       <Nav.Link>  <Link to='/' >Home</Link></Nav.Link>
        <Nav.Link>  <Link to='/about' >About</Link></Nav.Link>
        <Dropdown>
      <Dropdown.Toggle variant="Success " id="dropdown-basic">
     Categorias
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item > <Link to='/category' >Ropa </Link></Dropdown.Item>
        <Dropdown.Item  > <Link to='/category' >Electrónica </Link></Dropdown.Item>
        <Dropdown.Item  > <Link to='/category' >Jemelery </Link></Dropdown.Item>
        <Dropdown.Item > <Link to='/category' >Joyería </Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
      </Nav>
     <CartWidget count="0"/>
    </Container>
  </Navbar>
  
</>;
};

export default Header;
