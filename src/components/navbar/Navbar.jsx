import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#features">Products</a></p>
    <p><a href="#pricing">Pricing</a></p>
    <p><a href="#faq">FAQ</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <img src='logo' alt="logo" id="home" />
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <p><a href="#home">Sign in</a></p>
        <p className="rounded__btn-no_bg"><a href="#home">Sign Up</a></p>
      </div>

      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
              <div className="navbar-menu_container-links-sign">
                <p><a href="#home">Sign in</a></p>
                <p className="rounded__btn-no_bg"><a href="#home">Sign Up</a></p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar
