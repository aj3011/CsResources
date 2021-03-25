import React from 'react'
import './AboutUs.css'
import aboutUsInfo from './Icons/info.png'

function AboutUs() {
    return (
        <div className='aboutUs'>
            <h1>About Us</h1>
            <div class= 'info'>
            <div className='aboutUsInfoimg'>
                <img src={aboutUsInfo}></img>
                </div>
                <div className = 'aboutUsInfo'>
                <h1>Who are WE ?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text <br></br>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
            </div>
           
        </div>

    )
}

export default AboutUs
