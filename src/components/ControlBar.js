import { Link } from "react-router-dom";
import data from "../DATA";

import "./ControlBar.css";

const ControlBar = (props) => {
  let currUserId = props.index + 1;
    return (
        <div className="control-bar-container">
          <Link
            to={`/users/${currUserId === 1 ? 25: currUserId - 1}`}
            onClick={() => currUserId === 1 ? props.changeUser(false, true) : props.changeUser(false)}
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
            to={`/users/${currUserId === data.length ? 1 :currUserId + 1}`}
            onClick={() => currUserId === data.length ? props.changeUser(true, true) : props.changeUser(true)}
            className="change-user-btn"
          >
            Next &gt;
          </Link>
        </div>
    );
};

export default ControlBar;