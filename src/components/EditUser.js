import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

const EditUser = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const { userArr, setUserArr } = props;

  let currUser = userArr.find((ele) => ele.id === +params.userId);
  let dataCopy = [...userArr];
  console.log("Data Copy:", dataCopy);

  const [firstName, setFirstName] = useState(currUser.name.first);
  const [lastName, setLastName] = useState(currUser.name.last);
  const [city, setCity] = useState(currUser.city);
  const [country, setCountry] = useState(currUser.country);
  const [jobTitle, setJobTitle] = useState(currUser.title);
  const [employer, setEmployer] = useState(currUser.employer);
  const [favMovie1, setFavMovie1] = useState(currUser.favoriteMovies[0]);
  const [favMovie2, setFavMovie2] = useState(currUser.favoriteMovies[1]);
  const [favMovie3, setFavMovie3] = useState(currUser.favoriteMovies[2]);
  
  
  let editedObj = {
    id: +params.userId,
    name: { first: firstName, last: lastName },
    city: city,
    country: country,
    employer: employer,
    title: jobTitle,
    favoriteMovies: [favMovie1, favMovie2, favMovie3],
  };
  console.log(editedObj)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dataCopy.splice(params.userId - 1, 1, editedObj);
        console.log("New Data:", dataCopy);
        setUserArr(dataCopy);
        navigate(`/users/${params.userId}`);
      }}
    >
      <div className="user-card-container">
        <div className="user-card">
          <div className="info-container">
            <h2 className="card-name">
              {
                <input
                  className="name-input"
                  placeholder="First Name"
                  defaultValue={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              }
              {
                <input
                  className="name-input"
                  placeholder="Last Name"
                  defaultValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              }
            </h2>
            <p className="about">
              <span className="descriptor">From:</span>
              <input
                className="name-input"
                placeholder="City"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                className="name-input"
                placeholder="Country"
                defaultValue={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </p>
            <p className="about">
              <span className="descriptor">Job Title:</span>
              <input
                className="name-input"
                placeholder="Job Title"
                defaultValue={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </p>
            <p className="about">
              <span className="descriptor">Employer:</span>
              <input
                className="name-input"
                placeholder="Employer"
                defaultValue={employer}
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
                  defaultValue={favMovie1}
                  onChange={(e) => setFavMovie1(e.target.value)}
                />
              </li>
              <li>
                <input
                  className="name-input"
                  placeholder="Movie 2"
                  defaultValue={favMovie2}
                  onChange={(e) => setFavMovie2(e.target.value)}
                />
              </li>
              <li>
                <input
                  className="name-input"
                  placeholder="Movie 3"
                  defaultValue={favMovie3}
                  onChange={(e) => setFavMovie3(e.target.value)}
                />
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="cancel">Cancel</button>
        <button type="submit" className="confirm">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default EditUser;
