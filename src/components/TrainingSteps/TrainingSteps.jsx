import React from 'react';

import './TrainingSteps.scss';
import img2 from '../../assets/img/pexels-cesar-galeao-1673528-3253501.jpg';
import img3 from '../../assets/img/pexels-karlsolano-2780762.jpg'
import img4 from '../../assets/img/pexels-cottonbro-4761779.jpg';
import icon1 from '../../assets/icons/checkmark-in-circle.svg'


export const Steps = () => {
  return (
    <div className="steps">
      <div className="fitness-container">
        <div className="content-wrapper">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-image-container">
                <img
                  src={img3}
                  alt="Sports training"
                  className="hero-image"
                />
              </div>

              <div className="hero-text-container">
                <h1 className="hero-title">Start Training With Us</h1>
                <p className="hero-description">
                  Begin your fitness journey with our expert trainers and
                  comprehensive programs designed to help you achieve your
                  health and wellness goals effectively.
                </p>

                <div className="stats-container">
                  <div className="stat">
                    <div className="stat-number">
                      3,000<span className="accent">+</span>
                    </div>
                    <div className="stat-label">
                      Satisfied Clients
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-number">
                      5,000<span className="accent">+</span>
                    </div>
                    <div className="stat-label">
                      Workouts Completed
                    </div>
                  </div>
                </div>

                <a href="#" className="cta-button">
                  Get Started
                </a>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <h2 className="section-title">How It Works</h2>

          <div className="cards-container">
            <div className="card">
              <div className="icon-container">
                <img src={icon1} alt="Checkmark icon" />
              </div>
              <h3 className="card-title">Strength Training</h3>
              <p className="card-description">
                Build muscle, increase strength and improve bone density with
                our specialized strength training programs.
              </p>
            </div>

            <div className="card">
              <div className="icon-container">
                  <img src={icon1} alt="Checkmark icon" />
              </div>
              <h3 className="card-title">Cardio Training</h3>
              <p className="card-description">
                Boost your endurance and heart health with varied cardio
                workouts designed for all fitness levels.
              </p>
              <div className="card-image-container">
                <img
                  src={img2}
                  alt="Person working out on exercise equipment"
                  className="card-image"
                />
              </div>
            </div>

            <div className="card">
              <div className="icon-container">
               <img src={icon1} alt="Checkmark icon" />
              </div>
              <h3 className="card-title">Endurance Training</h3>
              <p className="card-description">
                Enhance your stamina and performance with progressive endurance
                programs tailored to push your limits safely.
              </p>
            </div>
          </div>
        


        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-image-container">
              <img
                src={img4}
                alt="Sports training"
                className="hero-image"
              />
            </div>

            <div className="hero-text-container">
              <h1 className="hero-title">Transform Your Life Through Fitness</h1>
              <p className="hero-description">
                Join our supportive community and experience the transformative power of consistent training.
              </p>

              <div className="stats-container">
                <div className="stat">
                  <div className="stat-number">
                    8,000<span className="accent">+</span>
                  </div>
                  <div className="stat-label">
                    Active members
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-number">
                    10,000<span className="accent">+</span>
                  </div>
                  <div className="stat-label">
                    Succsess stories
                  </div>
                </div>
              </div>
              <a href="#" className="cta-button">
                Get Started
              </a>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};
export default Steps;