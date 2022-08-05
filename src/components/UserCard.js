import { useState } from "react";

import "./UserCard.css";

const UserCard = () => {
    return (
      <div className="user-card-container">
        <div className="user-card">
          <div className="counter-flex">
            <div className="userCounter">1/25</div>
          </div>
          <div className="info-container">
            <h2 className="card-name">Marion Santori</h2>
            <p className="about">
              <span className="descriptor">From:</span>
              {`Liverpool, United Kingdom`}
            </p>
            <p className="about">
              <span className="descriptor">Job Title:</span>
              {`Research Associate`}
            </p>
            <p className="about">
              <span className="descriptor">Employer:</span>
              {`Skinix`}
            </p>
            <p className="about">
              <span className="descriptor">Favorite Movies:</span>
              {``}
            </p>
            <ol>
              <li>Fathom</li>
              <li>Strange Magic</li>
              <li>Martian Child</li>
            </ol>
          </div>
        </div>
      </div>
    );
}

export default UserCard;