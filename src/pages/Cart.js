import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import './Cartone.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Link } from 'react-router-dom';
const Cart = ({cartone,setCartone}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const cart=useSelector((state)=>state);

  const setQuantity = (user, amount) => {

    const newCart = [...cartone];

    newCart.find(

      (item) => item.name === user.name

    ).quantity = amount;

    setCartone(newCart);

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
                  
                    <div className='text-center'>

            <input

              value={user.quantity}

              onChange={(e) =>

                setQuantity(

                  user,

                  parseInt(e.target.value)

                )

              }

            /></div>
                    <button onClick={() => removeFromCart(user)}>remove</button>
                    
                    </div>
                    {/* <div>
                        <button onClick={()=>dispatch({type:"INCREASE",payload:user})}>+</button>
                        <p className='space'>{user.quantity}</p>
                        <button
                  onClick={() => {
                    if (user.quantity > 1) {
                      dispatch({ type: "DECREASE", payload:user });
                    } else{
                      dispatch({ type: "REMOVE", payload: user });
                    }
                  }}
                >
                  -
                </button>
                        </div> */}
                
                    

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
// import React from "react";




// import { useSelector, useDispatch } from "react-redux";
// import { Container, Row, Col } from "reactstrap";
// import { cartActions } from "./CartSlice.js";
// import { Link } from "react-router-dom";
// import CommenSection from "./CommenSection";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   return (
//    <div>
//       <CommenSection title="Your Cart" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               {cartItems.length === 0 ? (
//                 <h5 className="text-center">Your cart is empty</h5>
//               ) : (
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>Image</th>
//                       <th>Product Title</th>
//                       <th>Price</th>
//                       <th>Quantity</th>
//                       <th>Delete</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map((item) => (
//                       <Tr item={item} key={item.id} />
//                     ))}
//                   </tbody>
//                 </table>
//               )}

//               <div className="mt-4">
//                 <h6>
//                   Subtotal: $
//                   <span className="cart__subtotal">{totalAmount}</span>
//                 </h6>
//                 <p>Taxes and shipping will calculate at checkout</p>
//                 <div className="cart__page-btn">
//                   <button className="addTOCart__btn me-4">
//                     <Link to="/foods">Continue Shopping</Link>
//                   </button>
//                   <button className="addTOCart__btn">
//                     <Link to="/checkout">Proceed to checkout</Link>
//                   </button>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       </div>
  
//   );
// };

// const Tr = (props) => {
//   const { id, image01, title, price, quantity } = props.item;
//   const dispatch = useDispatch();

//   const deleteItem = () => {
//     dispatch(cartActions.deleteItem(id));
//   };
//   return (
//     <tr>
//       <td className="text-center cart__img-box">
//         <img src={image01} alt="" />
//       </td>
//       <td className="text-center">{title}</td>
//       <td className="text-center">${price}</td>
//       <td className="text-center">{quantity}px</td>
//       <td className="text-center cart__item-del">
//         <i class="ri-delete-bin-line" onClick={deleteItem}></i>
//       </td>
//     </tr>
//   );
// };

// export default Cart;
 //   const [users,setUsers]=useState([

      //     {
      
      //       name:"",
      
      //       price:"",
      
      //       image:""
      
      //     }
      
      //   ]);
       
      // useEffect(() => {
      //     AllUsers();
      //   }, []);
      
      
      // const AllUsers = async () => {
      //     axios.get('http://localhost:8080/api/test/image').then((response)=>{
      //        setUsers(response.data);
      //        console.log(response);
      //    })}
      
      
   
      
      
        
      //   useEffect(() => {
      //     UserService.getUserBoard().then(
      //       (response) => {
      //         setContent(response.data);
      //       },
      //       (error) => {
      //         const _content =
      //           (error.response &&
      //             error.response.data &&
      //             error.response.data.message) ||
      //           error.message ||
      //           error.toString();
      
      //         setContent(_content);
      //       }
      //     );
      //   }, []);