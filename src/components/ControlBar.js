import { Link } from "react-router-dom";

import "./ControlBar.css";

const ControlBar = (props) => {
    return (
        <div className="control-bar-container">
          <Link
            to={`/users/${props.id - 1}`}
            onClick={() => props.changeUser(false)}
            className="change-user-btn"
          >
            &lt; Previous
          </Link>
          <div className="modify-btns">
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
          </div>
          <Link
            to={`/users/${props.id + 1}`}
            onClick={() => props.changeUser(true)}
            className="change-user-btn"
          >
            Next &gt;
          </Link>
        </div>
    );
};

export default ControlBar;