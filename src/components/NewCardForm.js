import { useState } from "react";
import { useNavigate } from "react-router-dom";

import data from "../DATA";

const NewCard = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [favMovie1, setFavMovie1] = useState("");
  const [favMovie2, setFavMovie2] = useState("");
  const [favMovie3, setFavMovie3] = useState("");

  const newUserObj = {
    name: { first: firstName, last: lastName },
    city: city,
    country: country,
    employer: employer,
    title: jobTitle,
    favoriteMovies: [favMovie1, favMovie2, favMovie3],
  };

  return (
    <form>
      <div className="user-card-container">
        <div className="user-card">
          <div className="info-container">
            <h2 className="card-name">
              {
                <input
                  className="name-input"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              }
              {
                <input
                  className="name-input"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              }
            </h2>
            <p className="about">
              <span className="descriptor">From:</span>
              <input
                className="name-input"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                className="name-input"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </p>
            <p className="about">
              <span className="descriptor">Job Title:</span>
              <input
                className="name-input"
                placeholder="Job Title"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </p>
            <p className="about">
              <span className="descriptor">Employer:</span>
              <input
                className="name-input"
                placeholder="Employer"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </p>
            <p className="about">
              <span className="descriptor">Favorite Movies:</span>
            </p>
            <ol>
              <li>
                <input
                  className="name-input"
                  placeholder="Movie 1"
                  onChange={(e) => setFavMovie1(e.target.value)}
                />
              </li>
              <li>
                <input
                  className="name-input"
                  placeholder="Movie 2"
                  onChange={(e) => setFavMovie2(e.target.value)}
                />
              </li>
              <li>
                <input
                  className="name-input"
                  placeholder="Movie 3"
                  onChange={(e) => setFavMovie3(e.target.value)}
                />
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="cancel">Cancel</button>
        <button
          type="submit"
          className="confirm"
          onSubmit={(e) => {
            e.preventDefault();
            data.push(newUserObj);
            // navigate(`/users/${data.length}`)
          }}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default NewCard;
