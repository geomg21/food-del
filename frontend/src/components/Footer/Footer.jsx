import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="QuickBites Logo" />
            <p>QuickBites: Your Fast, Reliable Food Delivery Service — Hot, Fresh Meals Delivered to Your Doorstep!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.twitter_icon} alt="Twitter" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>QuickBites</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Delivery Info</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact Us</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>support@quickbites.com</li>
                <li>123 Food Street, City, Country</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © QuickBites - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
