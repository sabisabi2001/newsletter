import React from "react";
// import Websites from "./Websites";
import { Container, Row, Col, Button } from "react-bootstrap";
import img6 from "../../Assets/Sabi img/img6.webp";

function Second() {
  return (
    <Col
      xs={10}
      xxl={11}
      sm={10}
      md={11}
      xl={11}
      lg={11}
      className="offset-1 mt-5 "
    >
      <Row>
        <Col xs={10} xxl={5} sm={10} md={5} xl={5} lg={5}>
          <img src={img6} className="img-fluid" alt="" />
        </Col>
        <Col xs={10} xxl={5} sm={10} md={5} xl={5} lg={5}>
          <h2>Need to help clients use News Letter?</h2>
          <p className="mt-4">
            Unlock the tools you need to get work done for clients when you sign
            up through News Letter & Co, our community for freelancers and
            agencies. It’s free to join with any News Letter plan.
          </p>
          <Col className=" mt-5">
            <button type="button" class="btn btn-secondary btn-lg mb-5">
              Get Standard
            </button>
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

export default Second;
