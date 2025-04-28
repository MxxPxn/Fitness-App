import React from 'react';

import './Category.scss';
import squareIcon from '../../assets/icons/square-dashed-2-svgrepo-com.svg';
import heartIcon from '../../assets/icons/health-heart-heart-rate-svgrepo-com.svg';
import dumbbellIcon from '../../assets/icons/dumbbell-gym-svgrepo-com.svg';
import timerIcon from '../../assets/icons/timer-svgrepo-com 2.svg';
import bellIcon from '../../assets/icons/bell-ringing-thin-svgrepo-com.svg';
import statsIcon from '../../assets/icons/stats-up.svg';
import listIcon from '../../assets/icons/list.svg';
import fitnessIcon from '../../assets/icons/fitness-body-svgrepo-com.svg';

export const Category = () => {
    return (
        <div className="grid-category">

            <div className="grid-body">
                <div className="img-container">
                    <img src={squareIcon} alt="" />
                </div>
                <h3>Track your training</h3>
                <p>Track and monitor your workouts, sets, reps and progress over time to achieve better results.</p>
                <button type="button">Get Started</button>

            </div>
            <div class="grid-body">
                <div className="img-container">
                    <img src={heartIcon} alt="" />
                </div>
                <h3>Cardio traning</h3>
                <p>Improve your cardiovascular health and endurance with our specialized cardio training programs.</p>
                <button type="button">Get Started</button>

            </div>

            <div class="grid-body">
                <div className="img-container">
                    <img src={dumbbellIcon} alt="" />
                </div>
                <h3>Body builder training</h3>
                <p>Build strength and muscle with our comprehensive bodybuilding programs designed for all fitness levels.</p>
                <button type="button">Get Started</button>
            </div>

            <div class="grid-body">
                <div className="img-container">
                    <img src={timerIcon} alt="" />
                </div>
                <h3>Time training</h3>
                <p>Optimize your workout efficiency with timed training sessions and structured intervals for maximum results.</p>
                <button type="button">Get Started</button>
            </div>

            <div class="grid-body">
                <div className="img-container">
                    <img src={bellIcon} alt="" />
                </div>
                <h3>Notify training</h3>
                <p>Stay on track with customized workout reminders and notifications to maintain your fitness routine.</p>
                <button type="button">Get Started</button>
            </div>

            <div class="grid-body">
                <div className="img-container">
                    <img src={statsIcon} alt="" />
                </div>
                <h3>Analising training</h3>
                <p>Track and analyze your performance metrics to optimize your training and achieve better results.</p>
                <button type="button">Get Started</button>
            </div>

            <div class="grid-body">
                <div className="img-container">
                    <img src={listIcon} alt="" />
                </div>
                <h3>List your training</h3>
                <p>Organize and plan your workouts with our easy-to-use training schedule and progress tracking system.</p>
                <button type="button">Get Started</button>
            </div>

            <div class="grid-body">
                <div className="img-container">
                    <img src={fitnessIcon} alt="" />
                </div>

                <h3>Fitnes training</h3>
                <p>Access comprehensive fitness programs combining cardio, strength, and flexibility training for overall health.</p>
                <button type="button">Get Started</button>
            </div>

        </div>
    )
}
export default Category;