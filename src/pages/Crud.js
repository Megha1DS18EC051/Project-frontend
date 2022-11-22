import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import UserService from "../Services/user.service";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Crud.css'

const Crud = (props) => {
    const {id}=useParams();
    const [users,setUsers]=useState([

        {
    
          name:"",
    
          price:"",
    
          image:""
    
        }
    
      ]);
      const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/api/test/image/${id}`);
        AllUsers();
      }
     
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
      
      return (
        <div>
            <div className='container'>

                <div className='py-4'>

                    <table className="table border shadow">

<thead>

<tr>

<th scope="col">ID</th>

<th scope="col">NAME</th>

<th scope="col">PRICE</th>

<th scope="col">IMAGE</th>



<th scope="col">DELETE</th>
<th scope="col">EDIT</th>

</tr>

</thead>

<tbody>
{users.map((user, index) => {

return( <tr>

            <th scope="row" key={index}>{index+1}</th>

            

            <td>{user.name}</td>

            <td>{user.price}</td>
            <td ><img src={user.image}  className="im"/></td>

            

           

            <td>

    {/* <Link className='btn btn-success mx-2' to={`/viewUser/${user.id}`}>Accept</Link> */}

    <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button></td>
    <td><Link className='btn btn-outline-primary mx-2' to={`/edit/${user.id}`}>Edit</Link>

  </td>

          </tr>

        )})}

</tbody>

</table>

        </div>

       

    </div>
            
            
        </div>
    
        
    
       
    
    
        
      );
}

export default Crud
