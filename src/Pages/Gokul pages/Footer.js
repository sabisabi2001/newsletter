import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Appstore from "../../Assets/Gokul img/Appstore.webp";
import Google from "../../Assets/Gokul img/Google.webp";
// import { GiNewspaper } from "react-icons/gi";
import { AiFillTwitterCircle } from "react-icons/ai";

import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";
import "./Menu.css";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <footer class="bg mt-4">
        <Container fluid>
          <Row className="text-dark pt-3 pb-3  mx-auto">
            <Row>
              <Col
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                xll={1}
                className=" pt-3 pb-3 font"
              >
                <b>Related Links:</b>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                xll={4}
                className="font pt-3 pb-3"
              >
                How To Make a Website: A Guide for Building Your Website
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                xll={4}
                className="font pt-3 pb-3"
              >
                {" "}
                How To Start an E‑Commerce Business—a Complete Guide
              </Col>
              <Col
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={3}
                xll={3}
                className="font pt-3 pb-3"
              >
                {" "}
                How To Sell to Any Audience
              </Col>
            </Row>

            <hr />
          </Row>
        </Container>
        <Container>
          <Row className="text-dark pt-3 pb-3 text-start mx-auto">
            <Col
              xs={6}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              xll={2}
              className="pt-3 pb-3 text-start font"
            >
              <Col>
                <h6>
                  <b>Products</b>
                </h6>
                <p className="pt-3">Why Mailchimp?</p>
                <p>Product Updates</p>
                <p>Email Marketing</p>
                <p>Websites</p>
                <p>Transactional Email</p>
                <p>How We Compare</p>
                <p>GDPR Compliance</p>
                <p>Security</p>
                <p>Status</p>
                <p>Mobile App</p>
              </Col>
            </Col>

            <Col
              xs={6}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              xll={2}
              className="pt-3 pb-3 text-start font"
            >
              <Col>
                <h6>
                  <b>Resources</b>
                </h6>
                <p className="pt-3">Marketing Library</p>
                <p>Free Marketing Tools</p>
                <p>Marketing Glossary</p>
                <p>Integrations Directory</p>
              </Col>
            </Col>

            <Col
              xs={6}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              xll={2}
              className="pt-3 pb-3 text-start font"
            >
              <Col>
                <h6>
                  <b>Community</b>
                </h6>
                <p className="pt-3">Agencies & Freelancers</p>
                <p>Developers</p>
                <p>Events</p>
              </Col>
            </Col>

            <Col
              xs={6}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              xll={2}
              className="pt-3 pb-3 text-start font"
            >
              <Col>
                <h6>
                  <b>Company</b>
                </h6>
                <p className="pt-3">Our story</p>
                <p>Newsroom</p>
                <p>Annual Report</p>
                <p>Careers</p>
                <p>Accessibility</p>
              </Col>
            </Col>

            <Col
              xs={6}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              xll={2}
              className="pt-3 pb-3 text-start font"
            >
              <Col>
                <h6>
                  <b>Help</b>
                </h6>
                <p className="pt-3">Contact Us</p>
                <p>Hire an Expert</p>
                <p>Help Center</p>
              </Col>
            </Col>

            <Col
              xs={6}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              xll={2}
              className="pt-3 pb-3 text-start font"
            >
              <Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xll={12}>
                  <h6>
                    <b> NewsReader</b>
                  </h6>
                  <p className="pt-3">
                    Films, podcasts, and original series that celebrate the
                    entrepreneurial spirit.
                  </p>
                  <h6>
                    {" "}
                    Check it out
                    <span className="ps-2">
                      {" "}
                      <BsArrowRight size={20} />{" "}
                    </span>
                  </h6>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xll={12}>
                  <h6 className="mt-5">
                    <b> Courier</b>
                  </h6>
                  <p className="pt-3">
                    Expert insights, industry trends, and inspiring stories that
                    help you live and work on your own terms.
                  </p>
                  <h6>
                    {" "}
                    Learn
                    <span className="ps-2">
                      {" "}
                      <BsArrowRight size={20} />{" "}
                    </span>
                  </h6>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="text-dark pt-3 pb-3 text-center">
            <hr />
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              xll={10}
              className="pt-3 pb-3 mx-auto"
            >
              <Row>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  xll={3}
                  className="font pt-3 pb-3"
                >
                  <Row>
                    <Col xs={6} sm={6} md={4} lg={4} xl={4} xll={4}>
                      <img src={Appstore} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4} xl={4} xll={4}>
                      <img src={Google} className="img-fluid" alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col
                  xs={5}
                  sm={5}
                  md={5}
                  lg={5}
                  xl={5}
                  xll={5}
                  className="font pt-3 pb-3 mx-auto"
                >
                  <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xll={1}>
                      <BsFacebook size={20} />
                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xll={1}>
                      <AiFillTwitterCircle size={20} />
                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xll={1}>
                      <BsInstagram size={20} />
                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xll={1}>
                      <BsLinkedin size={20} />
                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xll={1}>
                      <BsYoutube size={20} />
                    </Col>

                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xll={1}>
                      <BsPinterest size={20} />
                    </Col>
                  </Row>
                </Col>

                <Col
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  xll={4}
                  className="font pt-3 pb-3 mx-auto"
                >
                  <Col>
                    <p>
                      {" "}
                      ©2001-2022 All Rights Reserved. Mailchimp® is a registered
                      trademark of The Rocket Science Group. Apple and the Apple
                      logo are trademarks of Apple Inc. Mac App Store is a
                      service mark of Apple Inc. Google Play and the Google Play
                      logo are trademarks of Google Inc. Privacy | Terms |
                      Cookie Preferences
                    </p>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
