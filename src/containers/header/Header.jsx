import React from 'react'
import './header.css'


import twoPhone from '../../assets/header-twophones.png'

const Header = () => {
  return (
    <div className="header__container">
      {/* <img src={headerImg} alt="food" /> */}

      <div className="header__content">
        <h3>Food app</h3>
        <h1>Why stay hungry when you can order form Bella Onojie</h1>
        <h4>Download the bella onoje’s food app now on</h4>
        <div className="button__container">
          <p className="button__header">Playstore</p>
          <p className="button__header no__bg">App store</p>
        </div>
      </div>

      <div className="header__phones">
        <img src={twoPhone} alt="app on phone" className="two__phone" />
      </div>

    </div>
  )
}

export default Header
