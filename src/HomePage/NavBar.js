import React,{useState,useEffect} from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import brandIcon from './Icons/struggle.png'
import homeIcon from './Icons/web-page-home.png'
import AboutUs from './Icons/information.png'
import ContactUs from './Icons/contact.png'
import {Nav, Navbar} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {FaHome, FaInfoCircle} from 'react-icons/fa';
import {MdComputer, MdContactMail} from 'react-icons/md';
import NavLogo from './Icons/NavLogo.png';


function NavBar()
{
  const[NavBar,setNavBar]=useState(false);
  
  const ChangeBackground = ()=>{
    if(window.scrollY >220)
    {
      setNavBar(true);
    }
    else
    {
      setNavBar(false);
    }
  }

  window.addEventListener('scroll',ChangeBackground);
    return(

      <IconContext.Provider value={{ color: "white", size: "2rem", padding: "20px"}}>

    <div>
    <Navbar fixed="top" expand="lg" variant="dark" className='color-nav' className={NavBar ? 'navBar active' : 'navBar'}>
  <Navbar.Brand href="#home"><img className='navlogo' src={NavLogo} />Cs Hut</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <FaHome /><Nav.Link href="/">Home</Nav.Link>
    <MdComputer /><Nav.Link href="/dividers">Resources</Nav.Link>
    <FaInfoCircle /><Nav.Link href="#about">About</Nav.Link>
    <MdContactMail /><Nav.Link href="#contact">Contact</Nav.Link>
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
     </IconContext.Provider>
    )
}

export default NavBar;