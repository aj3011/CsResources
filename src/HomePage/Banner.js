import React from 'react'
import bannerImage from './Icons/BannerImage.jpeg'
import './Banner.css'
import Button from '@material-ui/core/button';
import Resources from './Resources.js'
import BackGround from '../Videos/bannerback.mp4';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Banner()
{
    return (
        <div className='banner'>
           <div className = 'bannerheading'>
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
              <h1>What is Lorem Ipsum?</h1><p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived not only five centuries,<br/> but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s<br/> with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing<br/> software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    <React.Fragment>
                     <Link to="/resources">
                        <Button variant="contained" >Let's Begin !</Button>
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
