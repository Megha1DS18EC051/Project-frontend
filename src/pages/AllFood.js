
import React, { useState, useEffect } from "react";
import data from '../Data';
import './AllFood.css'
import { useDispatch } from 'react-redux'
import UserService from "../Services/user.service";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AllFood = ({cartone,setCartone}) => {
  const [users,setUsers]=useState([

    {

      name:"",

      price:"",

      image:""

    }

  ]);
 
useEffect(() => {
    AllUsers();
  }, []);


const AllUsers = async () => {
    axios.get('http://localhost:8080/api/test/image/allimages').then((response)=>{
       setUsers(response.data);
       console.log(response);
   })}


const navigate = useNavigate();


  
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

  const [content, setContent] = useState("");
  const dispatch=useDispatch();
  const addToCart = (product) => {

    // console.log(product)

   

    let newCart = [...cartone];

    console.log(newCart)

    let itemInCart = newCart.find(

      (item) => product.name === item.name

     

    );

    // console.log(itemInCart)

    if (itemInCart) {

      itemInCart.quantity++;

    } else {

      itemInCart = {

        ...product,

        quantity: 1,

      };

      newCart.push(itemInCart);

    }

    setCartone(newCart);

    // console.log(newCart)

  };
  return (
    
    
    // <div>
    //   <div className="container">
    //   <div className='products'>
          
    //       {data.map((productSweet)=>{
    //             productSweet.quantity=1;
    //           return(
    //           <div className='card '>
    //               <div>
    //                   <img className="products-image"
    //                   src={productSweet.image} alt={productSweet.name}></img><br></br>
    //               </div>
                 
    //               <h3 className="products-name">{productSweet.name}</h3>
                  
             
                  
    //               <h3 className="products-price">{productSweet.price} /-</h3>
                 
                  
    //                   <button className="product-add-button" onClick={()=>dispatch({type:"ADD",payload:productSweet})}>
    //                   Add to Cart</button>
                  

    //           </div>)
    //           }
    //       )}
         
    //   </div>
    // </div>
  
    // </div>
   
<>
      <h3 className="pro">
        SWEET PRODUCTS
      </h3>
      
<div className="container">
<div className="row row-cols-1 row-cols-md-3 g-4">

{

users.map((user,index)=>{
  user.quantity=1

  return(

  <div className="col">

  <div className="card">

    <img src={user.image} class="card-img-top" alt="..."/>

    <div className="card-body">

      <h5 className="card-title">{user.name}</h5>

      <p className="card-price">{user.price}</p>
      <button className="product-add-button" onClick={() => addToCart(user)}>
                Add to Cart</button>

    </div>

  </div>

</div>)})

}

</div>
</div>

      </>


    
  );
}

export default AllFood
