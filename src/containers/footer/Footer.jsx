import React from 'react'
import './footer.css'

import { FiFacebook } from 'react-icons/fi';
import { BsTwitter, BsInstagram  } from "react-icons/bs";

import logo from '../../assets/logo.png'

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer__container">
          <img src={logo} alt="logo" className="logo__grey" />
          <div className="footer__socials">
            <FiFacebook />
            <BsTwitter />
            <BsInstagram />
          </div>
          <p>Copywright 2020 Bella Onojie.com</p>
        </div>
      </div>
  )
}

export default Footer
