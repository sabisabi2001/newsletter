import React from "react";
import "./Mark.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Websites from "../../Pages/Sabi pages/Websites";
import Markting from "../../Pages/Sabi pages/Markting";
import Transactionemail from "../../Pages/Arun pages/Transactionemail";

function Box() {
  return (
    <Container fluid>
      <Row>
        <Col
          // xs={12}
          // xxl={12}
          // sm={12}
          // md={12}
          // xl={12}
          // lg={12}
          className="bg1 text-center"
        >
          <h1 className="mb-3 pt-5 pb-3">
            News Letter marketing plans for growing businesses{" "}
          </h1>
          <Row className="col-12 mx-auto">
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              xxl={4}
              className="mt-1 mb-2 mx-auto m-0 p-0"
            >
              <Link to="/Markting" className="href px-3 py-1 m-0 p-0">
                Markting Platform
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              xxl={4}
              className="mt-1 mb-2 mx-auto m-0 p-0"
            >
              <Link to="/Websites" className="href px-3 py-1 m-0 p-0">
                Websites & commerce
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={4}
              xl={4}
              xxl={4}
              className="mt-1 mb-2 mx-auto p-0 m-0"
            >
              <Link to="/Transactionemail" className="href px-3 py-1 m-0 p-0">
                Transational Email
              </Link>
            </Col>
          </Row>

          {/* <Row  className="mx-auto">
           <Col>
           <a className='href' href="#" >Markting Platform</a>
           </Col>
           <Col>
           <a   className='href' href="#" >Websites & commerce</a>
           </Col>
           <Col>
           <a   className='href' href="#" >Transational Email</a>
           </Col>

         
         </Row> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Box;
