import React from 'react';

export const Plans =() => {
    return (
        <div id="plans" className="plans">
        <div className="plans-title">
        Choose Your Plans
        </div>
        <div className="plans-column">
        <div className="plans-unit">
        <div className="title">Basic</div>
        <div className="price">
            <p><span>$6.50</span> /month</p>
        </div>
        <div className="content">
            <ul>
            <li>Access to basic equipment</li>
            <li>Group fitness classes</li>
            <li>Locker room access</li>
            <li>Basic fitness assessment</li>
            <li>Online workout tracking</li>
            </ul>
        </div>
        <div className="plans-button">
            <button type="submit">Get Started</button>
        </div>
        </div>

        <div className="plans-unit">
        <div className="title">Advance</div>
        <div className="price">
            <p><span>$10.50</span> /month</p>
        </div>
        <div className="content">
            <ul>
            <li>All Basic features included</li>
            <li>Personal trainer consultation</li>
            <li>Nutrition guidance</li>
            <li>Advanced fitness tracking</li>
            <li>Priority class booking</li>
            </ul>
        </div>
        <div className="plans-button">
            <button type="submit">Get Started</button>
        </div>
        </div>

        <div className="plans-unit">
        <div className="title">Professional</div>
        <div className="price">
            <p><span>$14.50</span> /month</p>
        </div>
        <div className="content">
            <ul>
            <li>All Advance features included</li>
            <li>Unlimited PT sessions</li>
            <li>Exclusive classes access</li>
            <li>Personalized meal plans</li>
            <li>24/7 trainer support</li>
            </ul>
        </div>
        <div className="plans-button">
            <button type="submit">Get Started</button>
        </div>
        </div>
    </div>
    </div>
    )
}
export default Plans;