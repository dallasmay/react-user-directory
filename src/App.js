import { Route, Routes, Navigate } from "react-router-dom";

import UserCard from "./components/UserCard";
import Nav from "./components/Nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/users/1" />} />
      <Route
        path="/users/:userId"
        element={
          <div>
            <Nav /> <UserCard />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
