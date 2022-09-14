import React from "react";
import  './navs.css';
import { Navbar,Nav,Container} from "react-bootstrap";
import  logo from '../../assets/profile.png';
const Navs =()=>{
    return(
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src ={logo} title ='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    
                </Nav>
                <Nav>
            
            <Nav.Link id="number">
             0123456789
            </Nav.Link>
          </Nav>
                </Navbar.Collapse>
               
            </Container>
        </Navbar>
    );
}
export default Navs;