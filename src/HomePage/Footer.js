import React from 'react'
import './Footer.css'
import instagram from './Icons/instagram.png'
import facebook from './Icons/facebook.png'
import discord from './Icons/discord.png'

function Footer() {
    return (
        <div className ='footer outline'>
        <div className='footer footer1'>
        <ul className='list'>

            <li className='item'>Resources</li> 
            <hr class='line' />
            <li className='item'>Contact Us</li>
            <hr class='line' />
            <li className='item'>Send Us Feedback</li>
        </ul>
        </div>
        <div className='footer footer2'>
        <ul className='list'>
            <li className='item'><img className='fimg' src={instagram} />On Instagram</li> 
            <hr class='line' />
            <li className='item'><img className='fimg' src={facebook} />On Facebook</li>
            <hr class='line' />
            <li className='item'><img className='fimg' src={discord} />On Discord</li>
        </ul>
        </div>
        </div>
    )
}

export default Footer
