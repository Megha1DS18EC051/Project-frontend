import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "./download.jpg";

import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="3" sm="5">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Sweet Mania</h5>
              <p>
              <b>Sweet Mania</b> made a humble beginning in 2015 as <u>sweet stall</u> at Kempegowda circle, Bangalore. </p>
            </div>
          </Col>

          <Col lg="4" md="3" sm="7">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>10:00am - 10:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>week off</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="4" md="3" sm="7">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Bangalore, Sylhet-3100, Karnataka</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 7123456789</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: sweetmania@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.
            </p>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;