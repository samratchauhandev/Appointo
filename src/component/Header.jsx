import React from 'react'
import Logo from '../assets/svg/Logo'
import RedirectSvg from '../assets/svg/RedirectSvg'

const Header = () => {
  return (
    <div className="header">
        <Logo/>
        {/* <div className="logo_container">
            <span className="logo">L</span>
            <div className="branding">
                <span className="company_title">Company Name</span>
                <span className="company_description">Your Slogan goes here</span>
            </div>
        </div> */}
        <div className="navigation_bar">
            <select className="nav_btn selector_box"><option value="1">Menu</option></select>
            <div className="nav_btn">Contact Us</div>
            <div className="share_button">
                <RedirectSvg/>
                <span className="share_text">Share Link</span>
            </div>
        </div>
    </div>
  )
}

export default Header