import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const {id}=useParams();
    const [users,setUsers]=useState([
              {
                email : "",
                name : "",
                issue:"",
                city:"",
                state:"",
                zip:""
        
              }
            ]);
        useEffect(() => {

            AllUsers();
      
          }, []);
          
          const AllUsers = async () => {

            axios.get('http://localhost:8080/api/test/contact/allcontacts').then((response)=>{
      
               setUsers(response.data);
      
               console.log(response);
      
           })}
           
           const deleteUser=async(id)=>{
            await axios.delete(`http://localhost:8080/api/test/contact/${id}`);
            AllUsers();
          }
    return (
        <div>
            <div className='container'>

                <div className='py-4'>

                    <table className="table border shadow">

<thead>

<tr>

<th scope="col">ID</th>

<th scope="col">EMAIL</th>

<th scope="col">NAME</th>

<th scope="col">ISSUE</th>

<th scope="col">CITY</th>

<th scope="col">STATE</th>

<th scope="col">ZIP</th>

<th scope="col">ACTION</th>

</tr>

</thead>

<tbody>
{users.map((user, index) => {

return( <tr>

            <th scope="row" key={index}>{index+1}</th>

            <td>{user.email}</td>

            <td>{user.name}</td>

            <td>{user.issue}</td>

            <td>{user.city}</td>

            <td>{user.state}</td>
            <td>{user.zip}</td>

            <td>

    {/* <Link className='btn btn-success mx-2' to={`/viewUser/${user.id}`}>Accept</Link> */}

    <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>

  </td>

          </tr>

        )})}

</tbody>

</table>

        </div>

       

    </div>
            
            
        </div>
    )
}

export default Details
