
import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../Services/auth.service";
import './Login.css'
import { useEffect } from "react";
import image from './two.jpg'
const Login = (props) => {
    let navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const login=()=>{
      localStorage.setItem(login==="true")
      navigate('/')
  }
  useEffect(()=>{
      let login=localStorage.getItem('user')
      if(login){
          navigate("/")
      }
      

  });
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    
      AuthService.login(username, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

         
        }
      );
  
  };

  return (

      
   
    <div className="col-md">
      <div
        class="bg_image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
      
     
      <div className="containertwo">
        
        <br></br>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleLogin} >
          <div className="form-group">
            <label htmlFor="username" className="user">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="user">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
                          />
          </div>


          <br></br>

          <div className="form-group">
            <button className="btn btn-primary btn-block ">
              
              <span >Login</span>
            </button>
          </div>

          
        </form>
      </div>
      </div>
      </div>
   
   
  );
}

export default Login
