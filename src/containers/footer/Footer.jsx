import React from 'react'
import './footer.css'

import { FiFacebook } from 'react-icons/fi';
import { BsTwitter, BsInstagram  } from "react-icons/bs";

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer__container">
          <img src='logo' alt="logo" className="logo__grey" />
          <div className="footer__socials">
            <FiFacebook />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
      </div>
  )
}

export default Footer
