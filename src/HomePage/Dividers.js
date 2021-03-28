import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Dividers.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Dividers()
{
    // const[fade,setFade]=useState(false);
  
    // const ChangeBackground = ()=>{
    //   if(window.scrollX >100)
    //   {
    //     setNavBar(true);
    //   }
    //   else
    //   {
    //     setNavBar(false);
    //   }
    // }
  
    // window.addEventListener('scroll',ChangeBackground);

    return (
        <div className='divider'>
        <NavBar className='navbar'/>
        <div className='ques'>What would you like to get help with today?</div>
        <div className='resources rheading'>
        <React.Fragment>
         <Link to="/Languages" style={{ textDecoration: 'none',color:'white' }}>
          Languages
          <p className='para'>Explore a variety of learning resources based on the choice of your interest</p>
         </Link>
        </React.Fragment>
        </div>

        <div className='projects pheading'>
        <React.Fragment>
        {/* <Link> will essentially return a standard <a> tag, which is why we apply textDecoration rule there. */}
        <Link to ='/Tech' style={{ textDecoration: 'none',color:'white' }}>
           Technologies
           <p className='para'>Discover a list of interesting topics on different domains</p>
           </Link>
        </React.Fragment>
        </div>
         
        </div>
    )
}

export default Dividers;
