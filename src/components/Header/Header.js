import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = ({cartCounter}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Small</Nav.Link>
          <Nav.Link href="#features">Shopping</Nav.Link>
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#features">
            Cart {' '}
            {
               cartCounter?(<button className="badge bg-secondary">{cartCounter}</button>):('')
            }
            </Nav.Link>
          <Nav.Link href="#pricing">SignIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
