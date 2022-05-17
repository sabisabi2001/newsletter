import React, { useEffect } from "react";
import "../../Components/Arun com/Homestyle.css";
import { Container, Row, Col } from "react-bootstrap";
import news from "../../Assets/Arun img/news.jpg";
import { Link } from "react-router-dom";
import Homeimg from "../../Components/Arun com/Homeimg";
import Hometext from "../../Components/Arun com/Hometext";
import Hometext2 from "../../Components/Arun com/Hometext2";
import Homelogtext from "../../Components/Arun com/Homelogtext";
import Homekepp from "../../Components/Arun com/Homekepp";
import Seetext3 from "../../Components/Arun com/Seetext3";

import img1 from "../../Assets/Arun img/img1";
import img2 from "../../Assets/Arun img/img2.webp";
import img3 from "../../Assets/Arun img/img3.webp";
import img5 from "../../Assets/Arun img/img5.webp";
import img6 from "../../Assets/Arun img/img6.webp";
import img7 from "../../Assets/Arun img/img7.webp";
import img8 from "../../Assets/Arun img/img8.webp";
import img9 from "../../Assets/Arun img/img9.webp";
import img10 from "../../Assets/Arun img/img10.webp";
import img11 from "../../Assets/Arun img/img11.webp";
import img12 from "../../Assets/Arun img/img12.webp";
import img13 from "../../Assets/Arun img/img13.webp";
import img15 from "../../Assets/Arun img/img15.webp";

import homelogo1 from "../../Assets/Arun img/homelogo1";
import homelogo2 from "../../Assets/Arun img/homelogo2.webp";
import homelogo3 from "../../Assets/Arun img/homelogo3.webp";
import homelogo4 from "../../Assets/Arun img/homlogo4.webp";
import homelogo5 from "../../Assets/Arun img/homelogo5.webp";
import homelogo6 from "../../Assets/Arun img/homelogo6.webp";
import homelogo7 from "../../Assets/Arun img/homelogo7.webp";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid>
        {/* Home page starting */}

        <Row className="bg-warning pt-5 pb-5">
          <Row className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mx-auto mt-5 mb-5 pt-5 pb-5">
            <Col
              className="mt-4 mx-auto"
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xll={6}
            >
              <h1 className="fontsize">Turn emails into revenue</h1>
              <p className="hometext pt-1 pb-1">
                Over 13 million businesses rely on News Letter to create and
                send engaging emails that reach the right people, build better
                relationships, and help drive revenue and growth. You can too.
              </p>
              <Row>
                <Col className="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                  <Link to="/Signup">
                    <button className="col-12 btn btn-outline-success bg-success fs-4 text-light">
                      Sign Up
                    </button>
                  </Link>
                </Col>
                <Col className="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 text-center pt-3">
                  <Link to="#">
                    <h5 className="text-success">Compare Plans</h5>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col
              className="mx-auto mt-5"
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xll={6}
            >
              <img
                src={news}
                className="img-fluid rounded"
                alt=""
                height="100%"
                width="100%"
              />
            </Col>
          </Row>
        </Row>

        {/* do it all */}

        <Row className="mx-auto text-center mt-5 pt-5 mb-3">
          <h1 className="fontsize">Do it all with News Letter</h1>
          <Col className="mx-auto col-12 col-sm-12 col-md-8 col-lg-7 col-xl-7 col-xxl-7">
            <p className="hometext2 pt-4 pb-1">
              Bring your audience data, marketing channels, and insights
              together so you can reach your goals faster—all from a single
              platform.
            </p>
          </Col>
        </Row>

        <Row className="mt-1 mb-1 mx-auto">
          <Col
            className="mx-auto"
            xs={12}
            sm={12}
            md={10}
            lg={4}
            xl={4}
            xll={4}
          >
            <Hometext
              head="Get your business online"
              text="Give your brand a home with a custom domain. Then launch a website to
        sell products or take appointments, all with built-in marketing tools to
        help you boost sales and find fans."
              buttontitle="Websites and Stores"
            />
          </Col>
          <Col
            className="mx-auto mt-4 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={5}
            xl={5}
            xll={5}
          >
            <Homeimg imgpath={img1} />
          </Col>
          <Col
            className="mx-auto mt-4 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={4}
            xl={4}
            xll={4}
          >
            <Hometext
              head="Market your business"
              text="Send the right messages on all the right channels. Build emails, social ads, 
              landing pages, postcards, and more from one place."
              buttontitle="Marketing campaigns"
            />
          </Col>
          <Col
            className="mx-auto mt-4 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={5}
            xl={5}
            xll={5}
          >
            <Homeimg imgpath={img2} />
          </Col>
        </Row>

        {/* we'll help you */}

        <Col className="col-12 col-sm-12 col-md-7 col-lg-5 col-xl-5 col-xxl-5 mt-5 mb-5 text-center">
          <h1 className="fontsize">We’ll help you—</h1>
        </Col>
        <Row>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={5}
            xl={5}
            xll={5}
          >
            <Homeimg imgpath={img3} />
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={4}
            xl={4}
            xll={4}
          >
            <Hometext2
              head="Reach the right people"
              text="Put your people at the heart of your marketing with tools that help you get to know your audience and see who you should be talking to.
              Audience management tools"
              link="Audience management tools"
            />
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={5}
            xl={5}
            xll={5}
          >
            <Homeimg imgpath={img7} />
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={4}
            xl={4}
            xll={4}
          >
            <Hometext2
              head="Create better content"
              text="Let your brand shine through with easy-to-use design tools and flexible templates. Our AI-powered Creative Assistant will even generate custom designs for you in seconds."
              link="Explore content studio"
            />
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={5}
            xl={5}
            xll={5}
          >
            <Homeimg imgpath={img5} />
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={4}
            xl={4}
            xll={4}
          >
            <Hometext2
              head="Automate your marketing"
              text="Add a personal touch without the personal effort through automated messages that reach your customers at exactly the right moments."
              link="Learn about automations"
            />
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={5}
            xl={5}
            xll={5}
          >
            <Homeimg imgpath={img6} />
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={10}
            lg={4}
            xl={4}
            xll={4}
          >
            <Hometext2
              head="Take action with our insights"
              text="With all your data and insights in one place, you can see what’s working best and get recommendations to help you do more of it."
              link="Insights & analytics tools"
            />
          </Col>
        </Row>

        {/* Grow with News Letter */}

        <Row className="bg-light mt-3 pb-5">
          <Col className="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-5 col-xxl-5 mt-5 mb-1 text-center mx-auto">
            <h1 className="pt-1 pb-1">Grow with News Letter</h1>
            <p className="hometext2">
              Our marketing platform helps brands like these build their thing
              and keep it growing.
            </p>
          </Col>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xll={4}
              className="mt-2 mb-3 mx-auto text-center"
            >
              <Homelogtext
                imgpath={homelogo1}
                height="40%"
                width="40%"
                text="Customers since 2011"
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xll={4}
              className="mt-2 mb-3 mx-auto text-center"
            >
              <Homelogtext
                imgpath={homelogo2}
                height="40%"
                width="40%"
                text="Customers since 2012"
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xll={4}
              className="mt-2 mb-3 mx-auto text-center"
            >
              <Homelogtext
                imgpath={homelogo3}
                height="40%"
                width="37%"
                text="Customers since 2010"
              />
            </Col>
          </Row>
        </Row>

        {/* keep pushing */}

        <Col className="mx-auto col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-5 mb-1">
          <h1 className="text-center fontsize">
            Keep pushing forward. We've got your back.
          </h1>
        </Col>

        <Row className="mt-5 mb-5 mx-auto">
          <Col
            className="mt-2 mb-3 mx-auto text-center"
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            xll={3}
          >
            <Homekepp
              imgpath={homelogo4}
              height="40%"
              width="40%"
              head="Award-winning support"
              text="Get the help you need, whenever you need it with our 24/7 support."
              link="Learn more"
            />
          </Col>
          <Col
            className="mt-2 mb-3 mx-auto text-center"
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            xll={3}
          >
            <Homekepp
              imgpath={homelogo5}
              height="40%"
              width="40%"
              head="250+ app integrations"
              text="You can connect all your tools to News Letter and unlock even more features."
              link="Learn more"
            />
          </Col>
          <Col
            className="mt-2 mb-3 mx-auto text-center"
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            xll={3}
          >
            <Homekepp
              imgpath={homelogo6}
              height="40%"
              width="40%"
              head="A directory of trusted pros"
              text="Take your marketing to the next level when you work with a News Letter partner."
              link="Browse partners"
            />
          </Col>
        </Row>

        {/* see how it all */}

        <Row className="mt-3 mb-5 pt-5 pb-5 seebgcolor">
          <Col className="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-5 col-xll-5 mx-auto text-center">
            <h1 className="fontsize pt-1 pb-1">
              See how it all comes together
            </h1>
          </Col>
          <Row className="mt-5 mb-3 mx-auto">
            <Col
              className="mx-auto mt-5 mb-4"
              xs={12}
              sm={12}
              md={9}
              lg={5}
              xl={5}
              xll={5}
            >
              <Homeimg imgpath={img8} />
            </Col>
            <Col
              className="mx-auto mt-5 mb-4"
              xs={12}
              sm={12}
              md={9}
              lg={4}
              xl={4}
              xll={4}
            >
              <Seetext3
                head="Connect your store to give regular emails a sales boost"
                text="Do more with your marketing using the power of analytics. Sync your store data and get pre-built customer segments based on purchase behavior to improve your sales."
              />
            </Col>
            <Col
              className="mx-auto mt-5 mb-4"
              xs={12}
              sm={12}
              md={9}
              lg={4}
              xl={4}
              xll={4}
            >
              <Seetext3
                head="Pave the way to purchase"
                text="Put your customers on personalized journeys that lead them to checkout."
              />
            </Col>
            <Col
              className="mx-auto mt-5 mb-4"
              xs={12}
              sm={12}
              md={9}
              lg={5}
              xl={5}
              xll={5}
            >
              <Homeimg imgpath={img9} />
            </Col>
            <Col
              className="mx-auto mt-5 mb-4"
              xs={12}
              sm={12}
              md={9}
              lg={5}
              xl={5}
              xll={5}
            >
              <Homeimg imgpath={img11} />
            </Col>
            <Col
              className="mx-auto mt-5 mb-4"
              xs={12}
              sm={12}
              md={9}
              lg={4}
              xl={4}
              xll={4}
            >
              <Seetext3
                head="Sit back and watch the results roll in"
                text="Track sales from first click to purchase. See who paid for what and how much money your campaign has earned."
              />
            </Col>
          </Row>
        </Row>

        {/* 17's street */}

        <Row className="mt-5 mb-5 mx-auto">
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={4}
            xl={4}
            xll={4}
            className="mt-5 mb-4 mx-auto"
          >
            <img src={homelogo7} classname="" height="40%" width="50%" alt="" />
            <p className="fs-5 mb-3">
              "Since using News Letter, I feel so much more confident in
              managing all our marketing. Like I got this."
            </p>
            <p className="mt-3 mb-3">
              – Marissa Axell, co-founder of 17th Street Athletic Club
            </p>
            <Row className="mt-3 mb-2 mx-auto">
              <Col className="col-6">
                <h1 className="mt-3 mb-3 fontsize">37%</h1>
                <b className="mt-1 mb-3">lift on online bookings</b>
                <p className="mt-3 mb-3">Results not typical.</p>
              </Col>
              <Col className="col-6">
                <h1 className="mt-3 mb-3 fontsize">250%</h1>
                <b className="mt-1 mb-3">increase in email signups</b>
              </Col>
            </Row>
          </Col>
          <Col
            className="mx-auto mt-5 mb-4"
            xs={12}
            sm={12}
            md={8}
            lg={5}
            xl={5}
            xll={5}
          >
            <Homeimg imgpath={img10} />
          </Col>
        </Row>

        {/* Resources to give */}

        <Row className="mt-5 mb-5 pt-3 pb-3 mx-auto">
          <Col className="col-12 col-sm-12 col-md-10 col-xl-7 col-xxl-7 mx-auto text-center">
            <h1 className="fontsize mt-3 mb-3">
              Resources to give you the inside track
            </h1>
            <p className="fs-5 mt-3 mb-3">
              Looking to get ahead? We have expert guidance, timely resources,
              and inspiring stories from entrepreneurs who’ve been in your
              shoes. Business-growing shoes.
            </p>
          </Col>
        </Row>

        {/* Customer Retention */}

        <Container className="mt-5 mb-5 seebgcolor mx-auto">
          <Col className="col-5 mx-auto text-center">
            <img src={img12} className="mt-5" height="80%" width="80%" alt="" />
          </Col>
          <Row>
            <Col className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-7 col-xll-7 mx-auto text-center">
              <Link to="#">
                <h5 className="mt-5 mb-2 text-dark">TOPIC EXPLAINER</h5>
                <h1 className="fontsize mt-3 mb-5 text-dark">
                  Customer Retention: Overview and Strategies
                </h1>
              </Link>
            </Col>
          </Row>
        </Container>

        <Row className="mt-5 mb-5">
          <Col
            xs={12}
            sm={12}
            md={9}
            lg={6}
            xl={5}
            xll={5}
            className="mt-5 mx-auto px-4 m-0 p-0"
          >
            <Homeimg imgpath={img13} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={9}
            lg={6}
            xl={5}
            xll={5}
            className="mt-5 mx-auto px-4 m-0 p-0"
          >
            <Homeimg imgpath={img15} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={9}
            lg={6}
            xl={5}
            xll={5}
            className="mt-1 px-4 mx-auto text-center m-0 p-0"
          >
            <Col className="seebgcolor pt-5 pb-5 px-3">
              <Link to="#" className="text-dark">
                <h5>SUCCESS STORIES</h5>
                <h1 className="fontsize mt-3 mb-3">
                  Furniture maker Mac Collins on heritage-led design
                </h1>
                <b className="">3min</b>
              </Link>
            </Col>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={9}
            lg={6}
            xl={5}
            xll={5}
            className="mt-1 mx-auto px-4 text-center m-0 p-0"
          >
            <Col className="seebgcolor pt-5 pb-1 pb-lg-1 pb-xl-5 pb-xxl-1 px-lg-3">
              <Link to="#" className="text-dark">
                <h5 className="mt-5 pt-3 pb-lg-5 pb-xl-5 pb-xxl-5">PRESENTS</h5>
                <h1 className="fontsize mt-3 mb-5 pb-5">Partners: Season 2</h1>
              </Link>
            </Col>
          </Col>
        </Row>

        {/* Let's do this */}

        <Row className="mt-5 pt-5 pb-5 bg-warning text-center">
          <Col className="col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4 mx-auto mt-5 mb-5">
            <h1 className="fontsize mt-1 mb-3">Let’s do this</h1>
            <h4 className="mt-5 mb-3">
              Every big idea starts with a small step forward.
            </h4>
            <button className="mt-4 mb-3 fs-4 text-light bg-success btn btn-outline-success">
              Pick A Plan
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
