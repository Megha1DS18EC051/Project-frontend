import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import './Cartone.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Link } from 'react-router-dom';
const Cart = ({cartone,setCartone}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  

  
  const handleChange = (product, d) => {

    const ind = cartone.indexOf(product);

    const arr = cartone;

    arr[ind].quantity += d;



    if (arr[ind].quantity === 0) arr[ind].quantity = 1;

    setCartone([...arr]);

  };
  const getTotalSum = () => {
    return cartone.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const clearCart = () => {
    setCartone([]);
  };
  const removeFromCart = (productToRemove) => {
    setCartone(
      cartone.filter((product) => product !== productToRemove)
    );
  };
        
     
      
        const [content, setContent] = useState("");
        
       
        
  return (
    <div>
     
      
    <div>
            <h3 className='spaceone'>cart items</h3>
            <div>
           
            {cartone.map((user)=>{
               
                return(
                <div className='cartcad' key={user.id}>
                    <div>
                        <img className="products-imageone"
                        src={user.image} alt={user.name}></img><br></br>
                    </div>
                   <div>
                    <h3 className="products-nameone">{user.name}</h3>
                   
                    </div>
                    <div>
                    <h3 className="products-priceone">{user.price}/-</h3>
                  
                    
            <div>

<button class="primaryone" onClick={() => handleChange(user, 1)}>+</button>

<button class="primaryone ">{user.quantity}</button>

<button class="primaryone" onClick={() => handleChange(user, -1)}>-</button>


                    <button onClick={() => removeFromCart(user)}>remove</button>
                    </div>
                    
                    </div>
                    
                
                    

                </div>)
                }
            )}
            {cartone.length > 0 && (
        <button className="btn-fill" onClick={clearCart}>Clear Products</button>
      )}
           
        </div>
            <br></br>
            <div className='product--add'><h3>Total Cost: ${getTotalSum()}</h3></div>

        <button className='product--add' >
                    <Link to="/checkout" >Proceed to checkout</Link>
                  </button>
        </div> 
           
       
    
    </div>
  )
}

export default Cart
