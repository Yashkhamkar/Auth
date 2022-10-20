import React, { useState } from "react";
import axios from "axios"
import swal from 'sweetalert';
import { NavLink, useNavigate } from "react-router-dom";
const Login = ({setLoginUser}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const login=()=>{
    const {email,pass}=user;
    if(!email||!pass){
      return swal("please fill all fields");
    }
    axios.post("http://localhost:9002/login",user).then(res=>{
      swal(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    });
  }
  return (
    <>
      <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="pass" value={user.pass} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button"><NavLink to="/register" style={{ textDecoration: 'none' }} >Register</NavLink></div>
        </div>
    </>
  );
};

export default Login;
