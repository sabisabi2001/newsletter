import React, { useEffect } from "react";
import "../../Components/Sabi com/Mark.css";
import bootstrap from "bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import Box from "../../Components/Sabi com/Box";
import Firstbox from "../../Components/Sabi com/Firstbox";
import Text from "../../Components/Sabi com/Text";
import Acc from "../../Components/Sabi com/Acc";

function Markting(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid className="">
      <Row className="mt-5 mb-5 pt-3 pb-3">
        <Box />
        <Col className="text-center mt-5">
          {/* <input type="text" placeholder=''></input> */}
          <button className="mt-3 btn btn-outline-success text-black">
            How many contacts do you have?
          </button>
          <button className="mt-3 btn btn-outline-success text-black">
            500 $
          </button>
        </Col>
      </Row>

      {/* <Col xs={12} xxl={12} sm={12} md={12} xl={12} lg={12} className='span mt-5 text-center'>
          <Row>
            <Col xs={6} xxl={6} sm={6} md={6} xl={6} lg={6}>
        <span className='span2' >How many contacts do you have?</span>
        </Col>
        <Col xs={2} xxl={2} sm={2} md={2} xl={2} lg={2}  >

        <Button variant="outline-secondary">Secondary</Button>
        </Col>
       <Col/>
</Row>
        </Col>
         */}
      <Col
        xs={12}
        xxl={12}
        sm={12}
        md={12}
        xl={12}
        lg={12}
        className="ps-3 p-5 ms-2"
      >
        <Row>
          <Col xs={12} xxl={3} sm={12} md={6} xl={3} lg={3} className="mt-3">
            <Col className="box">
              <Firstbox
                name="Premium"
                name1="The Advanced features for in the pros who need more customization ."
                name2="Starts at"
                name3="$"
                name4="23,000"
                name5="/month*"
                name6="BUY NOW"
                name7="*Overages apply if contact or email send limit is exceeded. Learn more"
                name8="Everything in Standard, plus:"
                name9="Advanced Segmentation"
                name10="Multivariate Testing"
                name11="Comparative Reporting"
                name12="Unlimited Seats & Role-Based"
                name13="Phone & Priority Support"
                name14="About Premium "
                name15="Monthly email sends: 15x plan’s contact limit"
              />
            </Col>
          </Col>

          <Col xs={12} xxl={3} sm={12} md={6} xl={3} lg={3} className="mt-3">
            <Col className="box">
              <Firstbox
                name="Standard "
                name1="Data-driven automation and optimization tools for businesses .  "
                name2="Starts at"
                name3="$"
                name4="1,150"
                name5="/month*"
                name6="BUY NOW"
                name7="*Overages apply if contact or email send limit is exceeded. Learn more"
                name8="Everything in Essentials, plus:"
                name9="Customer Journey Builder "
                name10="Send Time Optimization"
                name11="Behavioral Targeting"
                name12="Custom Templates"
                name13="Dynamic Content"
                name14="About Standard "
                name15="Monthly email sends: 12x plan’s contact limit"
              />
            </Col>
          </Col>
          <Col xs={12} xxl={3} sm={12} md={6} xl={3} lg={3} className="mt-3">
            <Col className="box">
              <Firstbox
                name="Essentials  "
                name1="Great for email-only senders who want around-the-clock support. .  "
                name2="Starts at"
                name3="$"
                name4="770"
                name5="/month*"
                name6="BUY NOW"
                name7="*Overages apply if contact or email send limit is exceeded. Learn more"
                name8="Everything in Free This, plus:"
                name9="Email & Landing Page Templates"
                name10="Customer Journey Builder"
                name11="Custom Branding"
                name12="A/B Testing"
                name13="24/7 Email & Chat Support"
                name14="About  Essentials  "
                name15="Monthly email sends: 10x plan’s contact limit"
              />
            </Col>
          </Col>
          <Col xs={12} xxl={3} sm={12} md={6} xl={3} lg={3} className="mt-3">
            <Col className="box">
              <Firstbox
                name="Free "
                name1="All the multi-channel tools you need to build your business and audience. "
                name2="Starts at"
                name3="$"
                name4="0"
                name5="/month*"
                name6="Sign up for free"
                name7="**Sending will be paused if contact or email send limit is exceeded. Learn more"
                name8="Everything you get with Free: "
                name9="Marketing CRM"
                name10="Creative Assistant"
                name11="Website Builder"
                name12="News Letter Domain"
                name13="Forms & Landing Pages"
                name14="About Free  "
                name15="Monthly email send limit is 10,000 sends (daily limit of 2,000)"
              />
            </Col>
          </Col>
        </Row>
      </Col>
      <Col className="text-center">
        <Row>
          <Col class="col-4 text-center">
            <button type="button" class="btn btn-secondary btn-lg">
              Compare our plans{" "}
            </button>
          </Col>
        </Row>
      </Col>
      <Text />
      {/* <Col
        xs={12}
        xxl={10}
        sm={12}
        md={12}
        xl={10}
        lg={10}
        className="mt-5 ms-2"
      > */}
      {/* <Col className="mx-auto"> */}
      {/* <h1 className="text-center">FAQS</h1> */}
      <Col className="mx-auto" xs={12} sm={12} md={12} lg={10} xl={11} xxl={11}>
        <Acc />
      </Col>
      {/* </Col> */}
      {/* </Col> */}
      <Col className="text-center mt-5 mb-5 pt-3 pb-3">
        <h1>You’ll be in good company </h1>
      </Col>
    </Container>
  );
}

export default Markting;
