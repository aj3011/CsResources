import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import brandIcon from './Icons/struggle.png'
import homeIcon from './Icons/web-page-home.png'
import AboutUs from './Icons/information.png'
import ContactUs from './Icons/contact.png'
import {Nav, Navbar} from 'react-bootstrap';


function navBar()
{
    return(
    <div>
    <Navbar fixed="top" expand="lg" variant="dark" className='color-nav' className='navBar'>
  <Navbar.Brand href="#home">ProjectMania</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home"><img src={homeIcon} /> Home</Nav.Link>
      <Nav.Link href="#link"><img src ={AboutUs} />About</Nav.Link>
      <Nav.Link href="#link"><img src ={ContactUs} />Contact Us</Nav.Link>

    </Nav>
  </Navbar.Collapse>
     </Navbar>
    {/* <div className = 'brandName'>
      <img src={brandIcon}></img>
      <h1>Title</h1>
    </div>
 
    <div className = 'navbutton'>
    <img src ={homeIcon} /> <a href='#home'>Home</a>
     <a href='#home' >About</a>
     <a href='#home'>Resources</a>
     <a href='#home'>Contact Us</a>
     
    </div> */}
     
     </div>
    )
}

export default navBar;