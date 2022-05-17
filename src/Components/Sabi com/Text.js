import React from "react";
import "./Mark.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Text() {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          xxl={12}
          sm={12}
          md={12}
          xl={12}
          lg={12}
          className="mt-5 text-center "
        >
          <Row>
            <Col xs={12} xxl={5} sm={12} md={12} xl={6} lg={6}>
              <h4>
                Also included: Free tools for getting your business online
              </h4>
              <p className="text-center">
                All Marketing plans come with Free website and commerce
                features, so you can build your dream online presence. But if
                you want more advanced tools for selling and scheduling, try
                combining your Marketing plan with a paid Websites & Commerce
                plan.
              </p>
              <p style={{ color: "green" }}>
                Restrictions apply. See our full terms and conditions.
              </p>
              <Row>
                <Col class="col-4 text-center ">
                  <button type="button" class="btn btn-secondary btn-lg">
                    See Websites & Commerce plans{" "}
                  </button>
                </Col>
              </Row>
            </Col>
            <Col xs={12} xxl={5} sm={12} md={12} xl={6} lg={6}>
              <h4>Prefer to pay as you go?</h4>
              <p className="text-center mb-5">
                Instead of paying a monthly recurring charge, you can buy email
                credits as needed through our Pay As You Go plan. It's best for
                infrequent senders for selling and scheduling, try combining
                your Marketing plan with a paid Websites & Commerce plan..
              </p>
              <Row>
                <Col class="col-5 text-center  ">
                  <button type="button" class="btn btn-secondary btn-lg">
                    Learn More{" "}
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr></hr>
      <Col
        xs={12}
        xxl={12}
        sm={12}
        md={12}
        xl={12}
        lg={12}
        className="mt-5 text-center "
      >
        <Row>
          <Col xs={12} xxl={5} sm={12} md={12} xl={6} lg={6}>
            <h4>Two-factor authentication discount</h4>
            <p className="text-center">
              At News Letter, we’re serious about security. We offer a 10%
              discount for 3 months when you add two-factor authentication to
              your News Letter account with an app like Google Authenticator or
              SMS two-factor authentication.
            </p>
            <p style={{ color: "green" }}>
              Restrictions apply. See our full terms and conditions.
            </p>
            <Row>
              <Col class="col-4 text-center ">
                <button type="button" class="btn btn-secondary btn-lg">
                  GET STARDED{" "}
                </button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} xxl={5} sm={12} md={12} xl={6} lg={6}>
            <h4>Rates for nonprofits and charities</h4>
            <p className="text-center mb-5">
              News Letter offers a 15% discount to nonprofits and charities. To
              request the discount, sign up for a free account, and contact our
              Billing team with your username and a link to your organization’s
              website.
            </p>
            <Row>
              <Col class="col-5 text-center  ">
                <button type="button" class="btn btn-secondary btn-lg">
                  GET STARDED{" "}
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Text;
