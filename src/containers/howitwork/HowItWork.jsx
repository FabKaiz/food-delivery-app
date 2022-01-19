import React from 'react'
import './howitwork.css'

const HowItWork = () => {
  return (
    <div className="howitwork__container">
        <h1 className="mobile__title">How the app works</h1>

      <div className="howitwork__line"></div>
      <div className="howitwork__content">
        <h1>How the app works</h1>
        <div className="howitwork__content-screenshot">
          <p>picture</p>
          <p>title</p>
        </div>
        <div className="howitwork__content-screenshot">
          <p>picture</p>
          <p>title</p>
        </div>
        <div className="howitwork__content-screenshot">
          <p>picture</p>
          <p>title</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWork
