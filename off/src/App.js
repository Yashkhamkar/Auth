// import logo from './logo.svg';
import { useState } from "react";
import {
  Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
