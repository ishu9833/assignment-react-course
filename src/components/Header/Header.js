import React from 'react';
import logo from '../../Images/mySchool.png'
import './Header.css'
import {Navbar, Nav, Button,FormControl, Form} from 'react-bootstrap'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">My School</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Courses</Nav.Link>
                    <Nav.Link href="#pricing">Others</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />
            
        </div>
    );
};

export default Header;