import { useState } from "react";
import data from "../DATA";
import { useParams } from "react-router-dom";

import ControlBar from "./ControlBar";

import "./UserCard.css";

const UserCard = () => {
  const params = useParams();

  const [currUserIndex, setCurrUserIndex] = useState(params.userId - 1);
  
  let currUser = data[currUserIndex];

  const changeUser = (forward) => {
    if (forward) {
      setCurrUserIndex((prevState) => prevState + 1);
    } else {
      setCurrUserIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div>
      <div className="user-card-container">
        <div className="user-card">
          <div className="counter-flex">
            <div className="userCounter">{`${currUserIndex + 1}/25`}</div>
          </div>
          <div className="info-container">
            <h2 className="card-name">{`${currUser.name.first} ${currUser.name.last}`}</h2>
            <p className="about">
              <span className="descriptor">From:</span>
              {`${currUser.city}, ${currUser.country}`}
            </p>
            <p className="about">
              <span className="descriptor">Job Title:</span>
              {`${currUser.title}`}
            </p>
            <p className="about">
              <span className="descriptor">Employer:</span>
              {`${currUser.employer}`}
            </p>
            <p className="about">
              <span className="descriptor">Favorite Movies:</span>
            </p>
            <ol>
              <li>{`${currUser.favoriteMovies[0]}`}</li>
              <li>{`${currUser.favoriteMovies[1]}`}</li>
              <li>{`${currUser.favoriteMovies[2]}`}</li>
            </ol>
          </div>
        </div>
      </div>
      <ControlBar changeUser={changeUser} id={currUser.id}/>
    </div>
  );
};

export default UserCard;
