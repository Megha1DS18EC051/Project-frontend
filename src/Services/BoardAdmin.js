import React, { useState, useEffect } from "react";
import axios from "axios";
import UserService from "../Services/user.service";
import { useNavigate } from "react-router-dom";
import './Admin.css'
import imag from './add.jpg'
const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const navigate=useNavigate();
  const [user, setUser] = useState({

    name: "",

    price: 0,

    image: "",

  });
  const { name, price, image } = user;



  const onInputChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });

  };
  function PreviewImage(e) {

    e.preventDefault();

    let oFReader = new FileReader();

    oFReader.readAsDataURL(e.target.files[0]);

    oFReader.onload = function (oFREvent) {



      user.image = oFREvent.target.result;

    };

  }
  const onSubmit = async (e) => {

    e.preventDefault();

    console.log(user.price);

    console.log(user.name);

    console.log(user.image);



     await axios.post("http://localhost:8080/api/test/image",user);

     alert("Image Added Succesfully")

     navigate("/")

   };

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
    <div
        class="bg_image"
        style={{
          backgroundImage: `url(${imag})`,
          backgroundSize: "cover",
          height: "100vh",
        
        }}
      >
    
    <div className=" cardone">
    
      
   <form onSubmit={(e) => onSubmit(e)}>
   <br></br>
    <div className="mb-3">
  <label htmlfor="exampleFormControlInput1" className="form-label">productName</label>
  <input type="text" name="name" value={name} onChange={(e) => onInputChange(e)} className="form-control" id="exampleFormControlInput1"/>
</div>
<div className="mb-3">
  <label htmlfor="exampleFormControlTextarea1" className="form-label">productprice</label>
  <input type="number" name="price" value={price} onChange={(e) => onInputChange(e)}className="form-control" id="exampleFormControlInput1" />
</div>
<br></br>
    <div className="mb-3">
    <input type="file" name="image" accept="image/*" onChange={(e) => PreviewImage(e)} className="form-control" aria-label="file example" required placeholder="upload product image" id="exampleFormControlInput1">
      </input>
    <div className="invalid-feedback">Example invalid form file feedback</div>
  </div>
<br></br>
  <div className="mb-3">
    <button className="btn btn-primary" id="button" type="submit" >Submit product</button>
  </div>
  
   </form>
   </div>
   </div>
   </>
   
  );
};

export default BoardAdmin;