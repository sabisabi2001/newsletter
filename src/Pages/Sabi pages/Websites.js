import React, { useEffect } from "react";
import "../../Components/Sabi com/Mark.css";
import bootstrap from "bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import Webpro from "../../Components/Sabi com/Webpro";
import Firstimg from "../../Components/Sabi com/Firstimg";
import img4 from "../../Assets/Sabi img/img4.png";
import img5 from "../../Assets/Sabi img/img5.png";
import Power from "../../Components/Sabi com/Power";
import Second from "../../Components/Sabi com/Second";
import Acc2 from "../../Components/Sabi com/Acc2";
import Box from "../../Components/Sabi com/Box";

function Websites(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="pt-5 mt-3 p-0 m-0">
        <Box />

        <Container className="con mt-5">
          <Row>
            <Col
              xs={10}
              xxl={10}
              sm={10}
              md={10}
              xl={10}
              lg={10}
              className="mx-auto"
            >
              <Row>
                <Col
                  xs={11}
                  xxl={4}
                  sm={11}
                  md={6}
                  xl={4}
                  lg={6}
                  className="p-3 mt-3 mx-auto"
                >
                  <Col className="web px-4 pt-3 pb-1">
                    <Webpro
                      sabi="Plus"
                      sabi1="All websites & commerce features and our lowest transaction fees for scaling businesses."
                      sabi2="Starts at"
                      sabi3="$"
                      sabi4="2,237"
                      sabi5="/month"
                      sabi6="+ .5% transaction fee and Stripe processing fees* "
                    />
                  </Col>
                </Col>
                <Col
                  xs={11}
                  xxl={4}
                  sm={11}
                  md={6}
                  xl={4}
                  lg={6}
                  className="p-3 mt-3 mx-auto"
                >
                  <Col className="web px-4 pt-3 pb-1">
                    <Webpro
                      sabi="Core"
                      sabi1="Website customization, 24/7 support, and lower transaction fees for growing businesses."
                      sabi2="Starts at"
                      sabi3="$"
                      sabi4="771"
                      sabi5="/month"
                      sabi6="+ 1.5% transaction fee and Stripe processing fees* "
                    />
                  </Col>
                </Col>
                <Col
                  xs={11}
                  xxl={4}
                  sm={11}
                  md={6}
                  xl={4}
                  lg={6}
                  className="p-3 mt-3 mx-auto"
                >
                  <Col className="web px-4 pt-3 pb-1">
                    <Webpro
                      sabi="Free"
                      sabi1="Everything businesses need to build a website and launch a store.
                      These transaction 
              non-refundable."
                      sabi2="Starts at"
                      sabi3="$"
                      sabi4="0"
                      sabi5="/month"
                      sabi6="+ 2% transaction fee and Stripe processing fees*"
                    />
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Col className="text-center mt-5">
            <button type="button" class="btn btn-secondary btn-lg">
              Compare our plans{" "}
            </button>
          </Col>
          <Col
            xs={10}
            xxl={10}
            sm={10}
            md={10}
            xl={10}
            lg={10}
            className="text-center offset-1 mt-3"
          >
            <p>
              *All Websites & Commerce plans include access to our Mailchimp
              stores product. If you create and publish a store, transaction
              fees will be charged to you on a per transaction basis based on
              the total order value (minus promotions and discounts, plus tax
              and shipping) for each transaction. These transaction fees are
              non-refundable. You will also be charged fees by Stripe. See
              Stripe.com for details about Stripe fees.{" "}
            </p>
          </Col>
          <Col className="p1 mt-5">
            <Row>
              <Col>
                <h3 className="text-center mt-5">Featured Product:</h3>
                <p className="text-center mt-3">
                  Create unlimited one-on-one and group services with our new
                  Advanced Scheduling add-on for $8/month.
                </p>
                <Col className="text-center mt-5">
                  <button type="button" class="btn btn-secondary btn-lg mb-5">
                    Buy Now
                  </button>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col
            xs={10}
            xxl={10}
            sm={10}
            md={10}
            xl={10}
            lg={10}
            className="offset-2 mt-5"
          >
            <Row>
              <Col xs={10} xxl={5} sm={10} md={5} xl={5} lg={5}>
                <Firstimg />
              </Col>
              <Col
                xs={10}
                xxl={5}
                sm={10}
                md={5}
                xl={5}
                lg={5}
                className="ms-3 offset-1 mt-5"
              >
                <h2>Also included: Free, built-in marketing tools</h2>
                <p>
                  All Websites & Commerce plans come with Free marketing
                  features like email and social posting, so you can find new
                  customers and drive sales. But if you want more advanced
                  marketing tools, like our Customer Journey Builder, try a paid
                  Marketing plan
                </p>
                <Col className="text-center mt-5">
                  <button type="button" class="btn btn-secondary btn-lg mb-5">
                    Explore Marketing plans{" "}
                  </button>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col className="box5">
            <Row>
              <Col className="mt-5">
                <h1 className="text-center">Add on powerful features</h1>
              </Col>
              <Row>
                <Col
                  xs={10}
                  xxl={10}
                  sm={10}
                  md={10}
                  xl={10}
                  lg={10}
                  className="offset-1 mt-3 box6"
                >
                  <Row>
                    <Col
                      xs={10}
                      xxl={5}
                      sm={10}
                      md={5}
                      xl={5}
                      lg={5}
                      className="offset-1"
                    >
                      <h3 className="mt-5">Add on a domain</h3>
                      <p className="mt-5">
                        Buy a custom domain to help people find you on the web.
                        Plus, a consistently branded online p resence builds
                        trust across email and other channels. Choose from over
                        200 domain extensions, including .com, .org, and .net.
                        Start your search here
                      </p>
                      <Col className="mt-5 ">
                        <input
                          type="text"
                          placeholder="Start Your Search Here"
                        ></input>
                      </Col>
                      <Col className=" mt-3">
                        <button
                          type="button"
                          class="btn btn-secondary btn-lg mb-5"
                        >
                          Find Your Domain
                        </button>
                      </Col>
                    </Col>
                    <Col
                      xs={10}
                      xxl={5}
                      sm={10}
                      md={5}
                      xl={5}
                      lg={5}
                      className="ms-3 mt-5 "
                    >
                      <Col className="mt-5">
                        <img src={img4} className="img-fluid" alt="" />
                      </Col>
                    </Col>
                  </Row>
                  <Row className="box7 mt-4">
                    <Col
                      xs={8}
                      xxl={4}
                      sm={8}
                      md={8}
                      xl={4}
                      lg={4}
                      className="mt-3"
                    >
                      <img src={img5} className="img-fluid" alt="" />
                    </Col>
                    <Col
                      xs={8}
                      xxl={8}
                      sm={8}
                      md={8}
                      xl={8}
                      lg={8}
                      className="mt-3"
                    >
                      <p>
                        Add Google Workspace to your domain purchase to get a
                        custom email address and team collaboration tools like
                        Google Drive, Sheets, and Slides.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col className="mb-5">
            <Power />
            <Second />
            <Acc2 />
          </Col>
        </Container>
      </Container>
    </>
  );
}

export default Websites;
