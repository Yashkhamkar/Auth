import React, { useState } from "react";
import axios from "axios"
import swal from 'sweetalert';
import { NavLink, useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
    rpass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const register=()=>{
    const {name,email,pass,rpass}=user;
    if(!name||!email||!pass||!rpass){
      return swal("please fill all fields");
    }
    else{
      
      if(name&&email&&pass&&(pass===rpass)){
          axios.post("http://localhost:9002/register",user).then(
          res=>swal(res.data.message),
          navigate("/login"));
        }
    }
  }
  return (
    <div className="register">
    {console.log("User", user)}
    <h1>Register</h1>
    <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } required></input>
    <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } required></input>
    <input type="password" name="pass" value={user.pass} placeholder="Your Password" onChange={ handleChange } required></input>
    <input type="password" name="rpass" value={user.rpass} placeholder="Re-enter Password" onChange={ handleChange } required></input>
    <div className="button" onClick={register} >Register</div>
    <div>or</div>
    <div className="button" ><NavLink to="/login" style={{ textDecoration: 'none' }}>Login</NavLink></div>
</div>
  );
};

export default Register;
