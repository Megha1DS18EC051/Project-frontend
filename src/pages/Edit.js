import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  let navigate = useNavigate();

  const {id}=useParams();

  const [user, setUser] = useState({
    name: "",
    price: "",
    image: "",
  });


  const { name, price, image } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadUser();
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/test/image/${id}`, user);
    alert("Details updated Successfully")
    navigate("/");
  };

  const loadUser=async()=>{
    const result=await axios.get(`http://localhost:8080/api/test/image/${id}`)
    setUser(result.data)
  }
  function PreviewImage(e) {

    e.preventDefault();

    let oFReader = new FileReader();

    oFReader.readAsDataURL(e.target.files[0]);

    oFReader.onload = function (oFREvent) {



      user.image = oFREvent.target.result;

    };

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Product</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                NAME
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
               PRICE
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                IMAGE 
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="url"
                name="image"
                value={image}
                onChange={(e) => PreviewImage(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}