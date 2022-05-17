import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Textbox from "../../Components/Arun com/Textbox";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="bg-light">
        <Row className="pt-5 pb-5 mx-auto">
          <Col
            className="mx-auto pt-5 pb-5 mt-5"
            xs={12}
            sm={12}
            md={10}
            lg={8}
            xl={6}
            xxl={6}
          >
            <h2 className="mb-4">Log In</h2>
            <h6 className="mb-4">
              Need a Mailchimp account?
              <Link to="#" className="text-success px-2">
                Create an account
              </Link>
            </h6>

            <Textbox name="User Name" type="text" />
            <Textbox name="Password" type="password" />
            <h5 className="text-center mt-2 mb-3 py-1">
              <input type="checkbox" className="mx-2 my-1" />
              Keep me logged in
            </h5>
            <h6 className="text-center pt-2 pb-2 text-success">
              <Link to="#">
                <span className="mx-3"> Forgot username?</span>
                <span>Forgot password?</span>
              </Link>
            </h6>
            <Col className="text-center">
              <button className="mt-3 mb-2 btn fs-4 btn-outline-success bg-success text-light">
                Log In
              </button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
