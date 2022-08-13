import { Link } from "react-router-dom";

import EditUser from "./EditUser";

import "./ControlBar.css";

const ControlBar = (props) => {
  let currUserId = props.index + 1;
  return (
    <div className="control-bar-container">
      <Link
        to={`/users/${
          currUserId === 1 ? props.userArr.length : currUserId - 1
        }`}
        onClick={() =>
          currUserId === 1
            ? props.changeUser(false, true)
            : props.changeUser(false)
        }
        className="change-user-btn"
      >
        &lt; Previous
      </Link>
      <div className="modify-btns">
        <Link to={`/users/${currUserId}/edit`} className="control-btn">
          Edit
        </Link>
        <Link to="/" className="control-btn">
          Delete
        </Link>
        <Link to="/users/add-new-user" className="control-btn">
          New
        </Link>
      </div>
      <Link
        to={`/users/${
          currUserId === props.userArr.length ? 1 : currUserId + 1
        }`}
        onClick={() =>
          currUserId === props.userArr.length
            ? props.changeUser(true, true)
            : props.changeUser(true)
        }
        className="change-user-btn"
      >
        Next &gt;
      </Link>
    </div>
  );
};

export default ControlBar;
