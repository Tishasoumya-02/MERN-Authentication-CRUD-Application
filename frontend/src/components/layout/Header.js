import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import { Navbar, Nav,Container ,NavbarBrand} from 'react-bootstrap';
const  code="<code />"
 

class Header extends Component {
  

    render() { 
        return ( 
            <header className="header">
                <Container fluid style={{width:'100%'}}>
              <Navbar fluid bg="dark" variant="dark" sticky="top">
              
                  <NavbarBrand > <Link to="/"><h1 className="title"> {code}</h1></Link></NavbarBrand>
                <Nav className="ml-auto" >
                <AuthOptions />
                </Nav>
                </Navbar>
                </Container>
           
            </header>
         );
    }
}
 
export default Header;