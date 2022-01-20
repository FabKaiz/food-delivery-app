import React from 'react';
import'./screenshot_card.css'

const ScreenshotCard = ({ img, subtitle, title, description }) => {
  return (
    <div className="screenshot__card">
      <div className="screenshot__card-img">
        <img src={img} alt="screenshot app" />
      </div>
      <div className="screenshot__card-text">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default ScreenshotCard;
