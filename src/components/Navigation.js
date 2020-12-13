import React from 'react'
import {Button,Navbar,Nav,Form,FormControl} from 'react-bootstrap';


function Navigation() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#name">name</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
        
      </Navbar>
        </div>
    )
}

export default Navigation
