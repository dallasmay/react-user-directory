const UserCard = () => {
    return (
      <div>
        <div className="counter-flex">
          <div className="userCounter">1/25</div>
        </div>
        <div className="info-container">
          <h2>Marion Santori</h2>
          <p>{`From:`}</p>
          <p>{`Job Title:`}</p>
          <p>{`Employer:`}</p>
          <p>{`Favorite Movies:`}</p>
          <ol>
            <li>Fathom</li>
            <li>Strange Magic</li>
            <li>Martian Child</li>
          </ol>
        </div>
      </div>
    );
}

export default UserCard;