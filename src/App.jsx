import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Dashboard />
    </UserContextProvider>
  );
}

export default App;
