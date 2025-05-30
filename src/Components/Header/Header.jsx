import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categorias
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/category/men's clothing">men's clothing</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/category/women">women's clothing</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/category/electronics">electronics</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/category/jewelery">jewelery</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <CartWidget count="0" />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
