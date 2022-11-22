import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "./pic1.png";
import categoryImg02 from "./pic2.jpg";
import categoryImg03 from "./pic3.jpg";
import categoryImg04 from "./pic4.jpg";

import "./category.css";

const categoryData = [
  {
    display: "Autenticate taste",
    imgUrl: categoryImg01,
   
  },
  {
    display: "Affordable price",
    imgUrl: categoryImg02,
    
  },

  {
    display: "Standard quality",
    imgUrl: categoryImg03,
   
  },

  {
    display: "ISO certified",
    imgUrl: categoryImg04,
   
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
              
            </div>
            <h6>{item.name}</h6>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;