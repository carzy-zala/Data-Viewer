import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Dashboard() {
  const { user } = useContext(UserContext);

  return user ? (
    <div style={{ margin: "20px", backgroundColor: "green", padding: "10px",borderRadius:"10px" }}>
      <h1>Data From Context</h1>
      <h2>Welcome {user.username}</h2>
      <h2>Your secret is {user.password}</h2>
    </div>
  ) : (
    <div style={{ margin: "20px", backgroundColor: "red", padding: "10px",borderRadius:"10px" }}>
      Please Login
    </div>
  );
}

export default Dashboard;
