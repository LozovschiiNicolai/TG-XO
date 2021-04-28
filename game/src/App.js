import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App(props) {
  const { token, user, role } = useSelector(state => ({
    token: state.app.token || "",
    user: state.app.user || "",
    role: state.app.role || ""
  }));
  return (
    <div className="App">
      <div className="test-data">
        <span>{token}</span>
        <span>{user}</span>
        <span>{role}</span>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
