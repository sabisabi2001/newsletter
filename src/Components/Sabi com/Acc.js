import React from "react";
import "./Mark.css";
import { Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Acc() {
  return (
    <>
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
              <h5> What payment methods do you offer? </h5>
            </Accordion.Header>
            <Accordion.Body>
              We accept all major credit cards, PayPal, and (in select
              countries) direct debit. We also support transactions in a range
              of currencies.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5> How do I switch to a different plan?</h5>
            </Accordion.Header>
            <Accordion.Body>
              You can switch to a new plan at any time by going to the Billing
              page in your account. Select the plan you’d like to switch to and
              immediately start using new features.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5> Can I buy credits instead?</h5>
            </Accordion.Header>
            <Accordion.Body>
              Yes. If you send emails infrequently and prefer to pay as you go,
              you can buy email credits as an alternative to a monthly plan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h5>Do you have pricing for high-volume email senders?</h5>
            </Accordion.Header>
            <Accordion.Body>
              We do indeed. If you have more than 200,000 contacts, we have a
              high-volume plan that can meet your needs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h5>What happens if I hit my contact or sending limit?</h5>
            </Accordion.Header>
            <Accordion.Body>
              News Letter will automatically bill you for your overages. As long
              as you pay for your overages on time, we will not stop your
              campaigns or pause your account.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </>
  );
}

export default Acc;
