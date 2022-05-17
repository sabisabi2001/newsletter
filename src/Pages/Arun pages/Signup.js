import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Textbox from "../../Components/Arun com/Textbox";

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="bg-light">
        <Row className="pt-5 pb-5 mx-auto">
          <Col
            className="mx-auto pt-5 pb-5 mt-4"
            xs={12}
            sm={12}
            md={10}
            lg={8}
            xl={6}
            xxl={6}
          >
            <h3 className="mb-3">Welcome to News Letter</h3>
            <p className="mb-3">Create an account or log in</p>
            <Textbox name="Email" type="email" />
            <Textbox name="User Name" type="text" />
            <Textbox name="Password" type="password" />
            <p>
              By creating an account, you agree to our Terms and have read and
              acknowledge the Global Privacy Statement.
            </p>
            <Col className="text-center">
              <button className="mt-3 mb-2 btn fs-4 btn-outline-success bg-success text-light">
                Sign Up
              </button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
