/* used react-typed module for typewriter effect  */
import React from 'react'
import bannerImage from './Icons/BannerImage.jpeg'
import './Banner.css'
import Button from '@material-ui/core/button';
import Resources from './Dividers.js'
import BackGround from '../Videos/bannerback.mp4';
import Typed from 'react-typed';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Banner()
{

    function loadScreen()
    {
        <div class="loader-wrapper">
        <div id='loader'>
            {/* <!-- used for three revolving circles --> */}
            window.alert('hello');
        </div>
        </div>
    }
    return (
        <div className='banner'>
        <video  autoPlay loop muted
           style={{
               position:"absolute",
               top:'50%',
               width:'100%',
               height:'100%',
               left:'50%',
               right:"50%",
               objectFit:'cover',
               transform:'translate(-50%,-50%)',
               zIndex:-1,
 
           }}>
            <source src={BackGround} type='video/mp4' />
           </video> 
              
           <div className = 'bannerheading'>
              <div className='heading' >Cs Hut</div>
                 <p className='bodytext'>
                  <Typed
                     strings={[
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"]}
                    typeSpeed={50}
                    backSpeed={0}
                    loop={true}
                   > 
                </Typed></p> 
                    <React.Fragment className='frag'>
                     <Link to="/dividers">
                        <button className='btn' variant="contained" onClick={loadScreen}>Let's Begin !</button>
                    </Link>
                    </React.Fragment>
                        
                     
           </div>
           <div class="bg"></div>
           <div class="bg bg2"></div>
           <div class="bg bg3"></div>
        </div>
    )
}

export default Banner
