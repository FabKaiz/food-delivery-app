import React from 'react'
import './howitwork.css'

import ScreenshotCard from '../../components/screenshot_card/ScreenshotCard'

import screen1 from '../../assets/screen1.png'
import screen2 from '../../assets/screen2.png'
import screen3 from '../../assets/screen3.png'

const HowItWork = () => {
  return (
    <div className="howitwork__container" id='product'>
        <h1 className="mobile__title">How the app works</h1>

      <div className="howitwork__line"></div>
      <div className="howitwork__content">
        <h1>How the app works</h1>
        <div className="howitwork__content-screenshots-container">
          <ScreenshotCard
            img={screen1}
            subtitle='Create an account'
            title='Create/login to an existing
            account to get started'
            description='An account is created with your email
            and a desired password'
          />
          <ScreenshotCard
            img={screen2}
            subtitle='Explore varieties'
            title='Shop for your favorites
            meal as e dey hot.'
            description='Shop for your favorite meals or drinks
            and enjoy while doing it.'
          />
          <ScreenshotCard
            img={screen3}
            subtitle='Checkout'
            title='When you done check out
            and get it delivered.'
            description='When you done check out and get it 
            delivered with ease.'
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWork
