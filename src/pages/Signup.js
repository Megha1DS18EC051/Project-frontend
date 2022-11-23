import React, { useState, useRef } from "react";
import axios from "axios";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import image from './three.jpg'
//import avatar from './avatar.png'
const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
   

     await axios.post("http://localhost:8080/api/auth/signup",user);
     alert("Registered Succesfully")
     navigate("/")
   };

  return (
    <div className="col-md-12" style={{"margin-top":" 20px", "margin-left":"450"}}>
      <div
        class="bg_image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
      <div >
        <div className="containertwo">
        <br></br>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        

        <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
            <label htmlFor="username" className="user">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) =>onInputChange(e)}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="user">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) =>onInputChange(e)}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="user">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) =>onInputChange(e)}
                          />
          </div>
<br></br>
          <div className="form-group">
            <button className="btn btn-primary btn-block">
              
              <span>Signup</span>
            </button><br></br>
          </div>

         
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;