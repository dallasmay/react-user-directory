import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import data from "./DATA";

import UserCard from "./components/UserCard";
import Nav from "./components/Nav";
import NewCardForm from "./components/NewCardForm";
import EditUser from "./components/EditUser";

function App() {
  const [userData, setUserData] = useState([...data]);

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/users/1" />} />
      <Route
        path="/users/:userId"
        element={
          <div>
            <Nav /> <UserCard data={userData} />
          </div>
        }
      />
      <Route
        path="/users/add-new-user"
        element={
          <div>
            <Nav />
            <NewCardForm userArr={userData} setUserArr={setUserData} />
          </div>
        }
      />
      <Route
        path="/users/:userId/edit"
        element={
          <div>
            <Nav />
            <EditUser userArr={userData} setUserArr={setUserData} />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
