import React, { useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Components/Arun com/Homestyle.css";
import Homekepp from "../../Components/Arun com/Homekepp";
import Homeimg from "../../Components/Arun com/Homeimg";
import translogo1 from "../../Assets/Arun img/translogo1.webp";
import translogo2 from "../../Assets/Arun img/translogo2.webp";
import translogo3 from "../../Assets/Arun img/translogo3.webp";
import translogo4 from "../../Assets/Arun img/translogo4.webp";
import translogo5 from "../../Assets/Arun img/translogo5.webp";
import translogo6 from "../../Assets/Arun img/translogo6.webp";
import translogo7 from "../../Assets/Arun img/translogo7.jpg";
import translogo8 from "../../Assets/Arun img/translogo8.jpg";
import translogo9 from "../../Assets/Arun img/translogo9.jpg";
import translogo10 from "../../Assets/Arun img/translogo10.jpg";

import Box from "../../Components/Sabi com/Box";

function Transactionemail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="mt-3 pt-4 m-0 p-0">
        <Box />
      </Container>
      {/* Transaction email page starting */}

      <Container>
        <Row className="mt-5 mb-5 pt-5 pb-5 mx-auto">
          <Col className="mx-auto col-12 col-sm-12 col-md-11 col-lg-8 col-xl-8 col-xll-8 mt-3">
            <h3>Transactional email plans designed for developers</h3>
          </Col>
          <Col className="mx-auto col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xll-4 pt-2 mt-3">
            <Link to="#" className="text-dark">
              <b className=""> What is Transactional Email? </b>
            </Link>
          </Col>

          <Row className="mx-auto mt-3 mb-3">
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={4}
              xl={4}
              xxl={4}
              className="mx-auto pt-3 pb-2"
            >
              <Col className="table1 pt-3 pb-3 px-3">
                <h5>Enter your estimated sends per month</h5>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="form-control mt-4 mb-3 pt-2 pb-2"
                />
                <input type="checkbox" className="" />
                <span className="px-2">Dedicated IP for $29.95 / month</span>
                <hr />
                <h5>Your Plan</h5>
                <h6 className="mt-3 mb-2">
                  <b> $0.00</b> /month | 0 blocks @ $20/block
                </h6>
                <hr />
                <h6 className="mt-2 mb-3">
                  <b>$0.00</b> Estimated Cost Per Month
                </h6>
                <p className="mb-xl-1 mb-xxl-4">
                  <Link to="#" className="text-success">
                    <b className="">your News Reader Monthly Plan</b>
                  </Link>
                </p>
                <button className="mb-xl-5 mt-lg-4 mb-lg-2 mt-xl-4 fs-4 bg-success text-light btn btn-outline-success ">
                  Try for free*
                </button>
              </Col>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              className="mx-auto pt-3 pb-2"
            >
              <Col className="table1 pt-4 px-3 text-center pb-lg-5">
                <h5>Each block is a credit for 25,000 emails</h5>
                <Row className="mt-5 pb-1">
                  <h6 className="col-4 mb-4">TOTAL BLOCKS</h6>
                  <h6 className="col-4 mb-4">TOTAL BLOCKS</h6>
                  <h6 className="col-4 mb-4">TOTAL BLOCKS</h6>
                  <hr />
                </Row>
                <Row className="">
                  <h6 className="col-4 mt-4 mb-2">1 to 20 blocks</h6>
                  <h6 className="col-4 mt-4 mb-2">1 to 500k emails</h6>
                  <h6 className="col-4 mt-4 mb-2">$20/block</h6>
                </Row>
                <Row className="">
                  <h6 className="col-4 mt-4 mb-2">21 to 40 blocks</h6>
                  <h6 className="col-4 mt-4 mb-2">500k to 1M emails</h6>
                  <h6 className="col-4 mt-4 mb-2">$18/block</h6>
                </Row>
                <Row className="">
                  <h6 className="col-4 mt-4 mb-2">41 to 80 blocks</h6>
                  <h6 className="col-4 mt-4 mb-2">1M to 2M emails</h6>
                  <h6 className="col-4 mt-4 mb-2">$16/block</h6>
                </Row>
                <Row className="">
                  <h6 className="col-4 mt-4 mb-2">81 to 120 blocks</h6>
                  <h6 className="col-4 mt-4 mb-2">2M to 3M emails</h6>
                  <h6 className="col-4 mt-4 mb-2">$14/block</h6>
                </Row>
                <Row className="">
                  <h6 className="col-4 mt-4 mb-2">121 to 160 blocks</h6>
                  <h6 className="col-4 mt-4 mb-2">3M to 4M emails</h6>
                  <h6 className="col-4 mt-4 mb-2">$12/block</h6>
                </Row>
                <Row className="">
                  <h6 className="col-4 mt-4 mb-2">161+ blocks</h6>
                  <h6 className="col-4 mt-4 mb-2">4M+ emails</h6>
                  <h6 className="col-4 mt-4 mb-2">$10/block</h6>
                </Row>
              </Col>
            </Col>
          </Row>
          <h6 className="mt-3 mb-1">
            *New transactional email users can get up to 500 free email sends to
            their verified domain. Restrictions apply.
          </h6>
          <Link to="#" className="ps-3 text-success">
            <b>Learn more</b>
          </Link>
        </Row>
      </Container>

      {/* Featured Product */}

      <Container fluid>
        <Row className="mt-5 mb-5 pt-5 pb-5 bg-light">
          <Col
            className="text-center mx-auto"
            xs={12}
            sm={12}
            md={8}
            lg={6}
            xl={6}
            xll={6}
          >
            <h3 className="mt-1 mb-3">Featured Product:</h3>
            <b>
              Create unlimited one-on-one and group services with our new
              Advanced Scheduling add-on for $8/month.
            </b>
            <p className="mt-4 mb-2">
              <button className="fs-4 bg-success text-light btn btn-outline-success">
                Buy Now
              </button>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Made for developers */}

      <Container>
        <Row className="mx-auto">
          <Col
            className="mt-4 mb-5 mx-auto text-center"
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={8}
            xll={8}
          >
            <h1 className="fontsize">
              Made for developers to send emails that reach inboxes
            </h1>
          </Col>
        </Row>
        <Row className="mt-5 mb-5 pt-1 pb-1 mx-auto">
          <Col
            className="mt-2 mb-2 mx-auto text-center"
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={4}
            xll={4}
          >
            <Homekepp
              imgpath={translogo1}
              height="50%"
              width="50%"
              head="Global infrastructure"
              text="Benefit from automatic SPAM loop registration and pre-warmed dedicated IPs."
              link="Learn more"
            />
          </Col>
          <Col
            className="mt-2 mb-3 mx-auto text-center"
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={4}
            xll={4}
          >
            <Homekepp
              imgpath={translogo2}
              height="52%"
              width="52%"
              head="Scalable analytics"
              text="Get transactional email analytics from your dashboard, export API or webhooks get transactional email"
              link="Learn more"
            />
          </Col>
          <Col
            className="mt-2 mb-3 mx-auto text-center"
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={4}
            xll={4}
          >
            <Homekepp
              imgpath={translogo3}
              height="52%"
              width="52%"
              head="Email options"
              text="Customize sending and receiving for your transactional emails.Get started with guides and a deep knowledge base."
              link="Learn more"
            />
          </Col>
          <Col
            className="mt-5 mb-3 mx-auto text-center"
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={4}
            xll={4}
          >
            <Homekepp
              imgpath={translogo4}
              height="53%"
              width="53%"
              head="Developer guides"
              text="Customize sending and receiving for your transactional emails.Get started with guides and a deep knowledge base."
              link="Learn more"
            />
          </Col>
          <Col
            className="mt-5 mb-3 mx-auto text-center"
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={4}
            xll={4}
          >
            <Homekepp
              imgpath={translogo5}
              height="53%"
              width="53%"
              head="API reference"
              text="Use API documentation with all calls, parameters, and sample code API documentation with all calls."
              link="Learn more"
            />
          </Col>
        </Row>
      </Container>

      {/* Start sending transactional emails */}

      <Container fluid>
        <Row className="mt-5 pt-5 pb-5 bg-warning text-center">
          <Col className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 mx-auto mt-2 mb-2">
            <h1 className="fontsize mt-5 mb-3">
              Start sending transactional emails
            </h1>
            <Row className="col-8 mt-5 mb-3 mx-auto text-center">
              <Col className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-6 col-xxl-6 mx-auto">
                <button className="mt-2 mb-3 fs-3  pt-1 pb-1 text-light bg-success btn btn-outline-success">
                  Try For Free*
                </button>
              </Col>
              <Col className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6 pt-4 mx-auto">
                <Link to="#" className="text-success">
                  <b> Restrictions Apply. Learn more.</b>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5 mb-5 pt-5 pb-5">
          <h1 className="fontsize mb-5">FAQS</h1>
          <hr />
          <Col
            className="mx-auto"
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
                  <h5> What is included in the Transactional Email demo? </h5>
                </Accordion.Header>
                <Accordion.Body>
                  New transactional email users can send up to 500 transactional
                  emails to any email address on a verified domain—without
                  buying transactional email blocks or upgrading a plan. For new
                  Transactional Email users only.
                  <p>
                    <Link to="#" className="text-success">
                      <b> Learn more </b>
                    </Link>
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5>What payment methods do you offer?</h5>
                </Accordion.Header>
                <Accordion.Body>
                  We accept all major credit cards, PayPal, and (in select
                  countries) direct debit. We also support transactions in a
                  range of currencies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5>Is pricing different for API or SMTP?</h5>
                </Accordion.Header>
                <Accordion.Body>
                  No—the price is the same for sending emails using APIs or SMTP
                  service.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h5>
                    Do I need a News Reader account to send transactional
                    emails?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you need a News Reader account. Transactional Email is
                  available as an add-on to Standard and Premium plans, or the
                  legacy Monthly Plan. However, new transactional email users
                  can try our free demo with certain limits.
                  <p>
                    <Link to="#" className="text-success">
                      <b> Learn more about the demo here </b>
                    </Link>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h5>Can I buy email blocks smaller than 25,000 emails?</h5>
                </Accordion.Header>
                <Accordion.Body>
                  No, we only have blocks with 25,000 emails.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h5>What happens if I run out of email blocks?</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Set your account to automatically purchase email blocks when
                  you reach your predefined limit, or opt for an alert that
                  you're running low. Transactional sends are calculated in real
                  time, so the system will stop sending emails when you’re out
                  of blocks.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <h5>What happens to unused emails?</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Unused emails in a block don’t roll over month to month.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <h5>What if I need help?</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Contact our award winning Support team, and they can take care
                  of you.
                  <p>
                    <Link to="#" className="text-success">
                      <b> Contact support </b>
                    </Link>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="mt-5 mb-5 pt-3 pb-3 bg-light">
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={5}
            xl={5}
            xll={5}
          >
            <img src={translogo6} height="75%" width="90%" alt="" />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={4}
            xl={4}
            xll={4}
            className="mx-auto mt-5 mb-4"
          >
            <h1 className="mt-2 mb-2 fontsize">News Reader for agencies</h1>
            <h5 className="mt-3 mb-1">
              If you’re an agency, you probably want an agency account.
            </h5>
            <button className="fs-5 mt-3 mb-1 bg-success text-light btn btn-outline-success">
              Get Started
            </button>
          </Col>
        </Row>

        <Row className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5 col-xxl-5 text-center mx-auto mt-2 mb-5">
          <h1 className="fontsize mt-2 mb-2">You’ll be in good company</h1>

          <Row className="mt-4 mb-5 pt-2 pb-2 mx-auto">
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              xxl={3}
              className="mt-2 mb-2 mx-auto"
            >
              <Homeimg imgpath={translogo7} />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              xxl={3}
              className="mt-2 mb-2 mx-auto"
            >
              <Homeimg imgpath={translogo8} />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              xxl={3}
              className="mt-2 mb-2 mx-auto"
            >
              <Homeimg imgpath={translogo9} />
            </Col>{" "}
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              xxl={3}
              className="mt-2 mb-2 mx-auto"
            >
              <Homeimg imgpath={translogo10} />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Transactionemail;
