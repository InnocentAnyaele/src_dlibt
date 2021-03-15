import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../../../assets/img/datalink.png'
// import {Link, HashRouter} from 'react-router-dom'
import { Link} from "react-scroll"

import StudentModal from '../modal/StudentModal'
import SrcModal from '../modal/SrcModal'

const Navigation = () => {


    return (
        <Navbar bg="light" expand="lg" fixed="top">
  <Navbar.Brand href="#home"><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="header" activeClassName="selected"><img src={logo} style={{height: "30px", width: "30px", paddingRight: "2px"}} alt="logo"/><b style={{ fontFamily: "'Montserrat', sans-serif", color: 'blue'}}> Data Link SRC</b></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto nav-text">
      <Nav.Link><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="header" activeClassName="selected">Home</Link></Nav.Link>
      <Nav.Link><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="gallery" activeClassName="selected">Gallery</Link></Nav.Link>
      <Nav.Link><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="about" activeClassName="selected">About</Link></Nav.Link>
      <Nav.Link><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="news" activeClassName="selected">News</Link></Nav.Link>
      <Nav.Link><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="footer" activeClassName="selected">Contact</Link></Nav.Link>
    </Nav>
    <NavDropdown title="Login" id="basic-nav-dropdown" className="mr-sm-2">
        <NavDropdown.Item><StudentModal/></NavDropdown.Item>
        <NavDropdown.Item><SrcModal/></NavDropdown.Item>
      </NavDropdown>

  </Navbar.Collapse>
</Navbar>

// scrollToTop = () => {
//   scroll.scrollToTop(); 
// }
    )
}

export default Navigation