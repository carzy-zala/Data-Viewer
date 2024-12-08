import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <input
        style={{ padding: "6px 3px" }}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        style={{ padding: "6px 3px" }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <button style={{ backgroundColor: "blue" }} onClick={handleInput}>
        Submit
      </button>
    </div>
  );
}

export default Login;
