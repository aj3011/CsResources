import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import brandIcon from './Icons/struggle.png'
import homeIcon from './Icons/homepage.png'


function navBar()
{
    return(
    <div className = 'navbar'>
    <div className = 'brandName'>
      <img src={brandIcon}></img>
      <h1>Title</h1>
    </div>
 
    <div className = 'navbutton'>
    <img src ={homeIcon} /> <a href='#home'>Home</a>
     <a href='#home' >About</a>
     <a href='#home'>Resources</a>
     <a href='#home'>Contact Us</a>
     
    </div>
     
     </div>
    )
}

export default navBar;