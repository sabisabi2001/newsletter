import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Websites from "./Websites";

function Webpro(props) {
  return (
    <Col>
      <h2 className="text-center pb-1">{props.sabi}</h2>
      <p className="">{props.sabi1}</p>
      <h6 className="">{props.sabi2}</h6>
      <span className="">{props.sabi3}</span>
      <h2 className="">{props.sabi4}</h2>
      <p className="">{props.sabi5}</p>
      <p>{props.sabi6}</p>
      <Col className="text-center">
        <button type="button" class="btn btn-secondary btn-lg mb-3">
          BUY NOW
        </button>
      </Col>
    </Col>
  );
}

export default Webpro;
