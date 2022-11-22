
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Cart from './pages/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from './Services/auth.service'

import Login from './pages/Login';
import logo from "./download.jpg";
import Home from './pages/Home';
import Contact from './pages/Contact'
import Crud from './pages/Crud';
import Checkout from './pages/Checkout';
import Protected from './pages/Protected';
import AllFood from './pages/AllFood';
// import BoardModerator from "./Components/BoardModerator";
import BoardAdmin from './Services/BoardAdmin'
import Details from './pages/Details';
import Edit from './pages/Edit';
function App() {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [UserBoard, setUserBoard] = useState(undefined);
  const [cartone, setCartone] = useState([]);


  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setUserBoard(user.roles.includes("ROLE_USER"));

    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  const getCartTotal = () => {

    return cartone.reduce(

      (sum, { quantity }) => sum + quantity,

      0

    );

  };

  return (
    <div>
      <nav className="navbar navbar-expand  ">
      <div className="nav__wrapper d-flex align-items-center justify-content-between gap-5">
          <div className="logo">
            <img src={logo}  />
            <h5>SWEET MANIA</h5>
          </div>
         
        <div className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to={"/home"} className="nav-link" id="navbarone">
              Home
            </Link>
          </li>

          
          {showAdminBoard && (
            <li className="nav-item ">
              <Link to={"/admin"} className="nav-link " id="navbarone">
                Add Product
              </Link>
            </li>
            
          )}
          {showAdminBoard &&(
            <li className="nav-item">
          <Link to={"/details"} className="nav-link" id="navbarone"> 
           Contact Details
          </Link>
        </li>
          )
          }
          {showAdminBoard &&(
            <li className="nav-item">
          <Link to={"/crud"} className="nav-link" id="navbarone"> 
          Sweet details
          </Link>
        </li>
          )
          }
          

       
            
            
            
          

{UserBoard && (

<>
<li className="nav-item">
              <Link to={"/sweets"} className="nav-link " id="navbar1">
                Sweets
              </Link>
            </li>

<li className="nav-item">

<Link to={"/cart"} className="nav-link" id="navbar1">

<i class="fa fa-shopping-cart"><sup>{getCartTotal()}</sup></i>

</Link>

</li>

<li className="nav-item">

<Link to={"/contact"} className="nav-link" id="navbar1">

Contact

</Link>

</li>


</>

)}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
        
            
            <li className="nav-item" id="box">
              <a href="/login" className="nav-link" onClick={logOut} id="logone">
              <i class="ri-logout-box-r-fill" ></i>
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" id="log">
              <i class="ri-user-line"></i>
              </Link>
            </li>

            
          </div>
        )}
        </div>
      </nav>

     
        <Routes>
          <Route path="/"  element={<Home/>}></Route>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
         
         
          <Route path="/sweets"  element={<AllFood cartone={cartone} setCartone={setCartone}/>}></Route>
         
          <Route path="/admin"  element={<BoardAdmin/>}></Route>
          <Route path="/cart"  element={<Cart cartone={cartone} setCartone={setCartone}/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/details" element={<Details/>}></Route>
          <Route path="/crud" element={<Crud/>}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          
          
        </Routes>
      </div>
   
   
  );
}

export default App;
