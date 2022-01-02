import React from "react";
import { NavLink ,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const Navbarw = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" to="/contact">Contact  </NavLink>
            <NavLink className="nav-item nav-link" to="/signin"> Login  </NavLink>
            <NavLink className="nav-item nav-link" to="/register">Sign Up </NavLink>
            <NavLink className="nav-item nav-link" to="/logout">  Log Out </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            
              <NavDropdown.Item as={Link} to="/inventory">Inventory</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="admin">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Navbarw;
