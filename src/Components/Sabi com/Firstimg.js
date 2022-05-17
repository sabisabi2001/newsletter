import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Websites from "./Websites";
import pricing from "../../Assets/Sabi img/pricing.webp";

function Firstimg() {
  return (
    <Col>
      <img src={pricing} className="img-fluid" alt="" />
      {/* <img src="./Assets./pricing.jpg "  alt="Responsive image"></img> */}
    </Col>
  );
}

export default Firstimg;
