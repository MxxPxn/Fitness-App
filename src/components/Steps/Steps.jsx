import React from 'react';

export const Steps = () => {
    return (
      <div className="steps">
        <div className="steps-title">Training steps</div>
        <div className="training-section">
          <div className="image-container">
            <img src="img/pexels-anush-1229356.jpg" width="460" height="345" alt="Training Image" />
          </div>
          <div className="text-container">
            <h3>Start Training With Us</h3>
            <p>Begin your fitness journey with our expert trainers and comprehensive programs designed to help you achieve your health and wellness goals effectively.</p>
            <div className="stats">
              <div className="stat">
                <h2>3,000<span>+</span></h2>
                <p>SATISFIED CLIENTS</p>
              </div>
              <div className="stat">
                <h2>5,000<span>+</span></h2>
                <p>WORKOUTS COMPLETED</p>
              </div>
            </div>
            <button className="start-button">Get Started</button>
          </div>
        </div>
        <div className="training-section">
          <div className="text-container">
            <h3>How It Works</h3>
            <ul>
              <li>
                <h4>Strength Training</h4>
                <p>Build muscle, increase strength and improve bone density with our specialized strength training programs.</p>
              </li>
              <li>
                <h4>Cardio Training</h4>
                <p>Boost your endurance and heart health with varied cardio workouts designed for all fitness levels.</p>
              </li>
              <li>
                <h4>Endurance Training</h4>
                <p>Enhance your stamina and performance with progressive endurance training techniques.</p>
              </li>
            </ul>
          </div>
          <div className="image-container">
            <img src="img/pexels-victorfreitas-949129.jpg" width="460" height="345" alt="Fitness Training" />
          </div>
        </div>
        <div className="training-section">
          <div className="image-container">
            <img src="img/pexels-anush-1229356.jpg" width="460" height="345" alt="Training Image" />
          </div>
          <div className="text-container">
            <h3>Transform Your Life Through Fitness</h3>
            <p>Join our supportive community and experience the transformative power of consistent training. Our expert coaches will guide you every step of the way.</p>
            <div className="stats">
              <div className="stat">
                <h2>8,000<span>+</span></h2>
                <p>ACTIVE MEMBERS</p>
              </div>
              <div className="stat">
                <h2>10,000<span>+</span></h2>
                <p>SUCCESS STORIES</p>
              </div>
            </div>
            <button className="start-button">Get Started</button>
          </div>
        </div>
      </div>
    )
  }
  export default Steps;