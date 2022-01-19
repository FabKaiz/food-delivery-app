import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#product">Product</a></p>
    <p><a href="#faq">Faq</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" id="home" />
      <div className="navbar__links">
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar
