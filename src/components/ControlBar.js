import "./ControlBar.css";

const ControlBar = () => {
    return (
      <div>
        <div className="control-bar-container">
          <a href="#">&lt; Previous</a>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
          <a href="#">Next &gt;</a>
        </div>
      </div>
    );
};

export default ControlBar;