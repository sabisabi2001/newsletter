import React from "react";
import "./Mark.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

function Acc2() {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          className="mx-auto"
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={11}
          xxl={11}
        >
          <h1 className="fontsize mb-5 mt-5">FAQS</h1>
          <hr />
          <Col
            className="mx-auto pt-3"
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={11}
            xxl={11}
          >
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h6> What payment methods does News Letter accept? </h6>
                </Accordion.Header>
                <Accordion.Body>
                  We accept all major credit cards, PayPal, and (in select
                  countries) direct debit. We also support transactions in a
                  range of currencies.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h6>
                    {" "}
                    How much does it cost to sell from a News Letter online
                    store?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  There are 2 types of fees for transactions on stores. First,
                  each transaction includes a %-based transaction fee, based on
                  your monthly plan and total order value. We also partner with
                  Stripe to process payments; Stripe charges fees based on your
                  location.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h6>
                    {" "}
                    Can I connect my existing domain to a News Letter website?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  If you own a domain through News Letter or a third-party
                  service, you can connect it to your online store with a Core
                  or Plus Websites & Commerce plan. Connect a Domain or
                  Subdomain
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h6>
                    {" "}
                    Are News Letter online stores available in my country?
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  Stores are currently only supported in the United States and
                  United Kingdom. Any News Letter user can explore the feature
                  and set up a Store, but only users who have businesses based
                  in the UK and the US can publish a store and sell products.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h6> How do I switch to a different plan?</h6>
                </Accordion.Header>
                <Accordion.Body>
                  You can switch to a new plan at any time by going to the
                  Billing page in your account. Select the plan you’d like to
                  switch to and immediately start using new features.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Acc2;
