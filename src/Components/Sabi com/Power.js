import React from "react";
// import Websites from "./Websites";
import { Container, Row, Col, Button } from "react-bootstrap";
function Power() {
  return (
    <Container>
      <Col
        xs={10}
        xxl={10}
        sm={10}
        md={10}
        xl={11}
        lg={11}
        className="offset-1 mt-5"
      >
        <Row>
          <Col xs={10} xxl={5} sm={10} md={5} xl={5} lg={5}>
            <h2 className="mt-5">Two-factor authentication discount</h2>
            <p className="mt-3">
              At News Letter, we’re serious about security. We offer a 10%
              discount for 3 months when you add two-factor authentication to
              your News Letter account with an app like Google Authenticator or
              SMS two-factor authentication.
            </p>
            <span>Restrictions apply. See our full terms and conditions.</span>
            <Col className=" mt-3">
              <button type="button" class="btn btn-secondary btn-lg mb-5">
                GET STARDED
              </button>
            </Col>
          </Col>

          <Col xs={10} xxl={5} sm={10} md={5} xl={5} lg={5} className="ms-2">
            <h2 className="mt-5">Rates for nonprofits and charities</h2>
            <p className="mt-3">
              News Letter offers a 15% discount to nonprofits and charities. To
              request the discount, sign up for a free account, and contact our
              Billing team with your username and a link to your organization’s
              website.
            </p>
            <p></p>

            <Col className=" mt-4 pt-3">
              <button type="button" class="btn btn-secondary btn-lg mb-5 mt-5">
                GET STARDED
              </button>
            </Col>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Power;
