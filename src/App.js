import { Route, Routes, Navigate } from "react-router-dom";

import UserCard from "./components/UserCard";
import Nav from "./components/Nav";
import NewCardForm from "./components/NewCardForm";

function App() {
  let addUserFunc;
  const addUserDrill = (addUserFunction) => {
    addUserFunc = addUserFunction;
    return
  };
  let userArrVar;
  const userArrDrill = (userArr) => {
    userArrVar = userArr
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/users/1" />} />
      <Route
        path="/users/:userId"
        element={
          <div>
            <Nav />{" "}
            <UserCard addUserDrill={addUserDrill} userArrDrill={userArrDrill} />
          </div>
        }
      />
      <Route
        path="/users/add-new-user"
        element={
          <div>
            <Nav />
            <NewCardForm addUserFunction={addUserFunc} userArr={userArrVar} />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
