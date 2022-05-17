import { Accordion, Offcanvas } from "react-bootstrap";
import { useState, React, useEffect } from "react";
// import img4 from "../../Assets/Gokul img/img4.jpg";
function Produts() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <span onClick={handleShow}>Produts</span>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>WE'LL HELP YOU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Get Your Business Online</Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>Website</h5>
                  <p>
                    Create Free Website that comes with built-in marketing tool.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Online Store</h5>
                  <p>
                    {" "}
                    Lanch a store that comes with Everything You need to
                    apponitments with you.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Apponitment Scheduling</h5>
                  <p>
                    {" "}
                    App Online store Scheduling to Your Website so people book
                    apponitments with you.
                  </p>
                </div>
                <div class="pt-3">
                  <h5>Domains</h5>
                  <p>
                    Claim a Custom demain to make it easy for people find Your
                    brand on the web.
                  </p>
                </div>

                <div>
                  <div class="pt-3">
                    <h5>Website</h5>
                    <p>
                      Create Free Website that comes with built-in marketing
                      tool.
                    </p>
                  </div>

                  <div class="pt-3">
                    <h5>Online Store</h5>
                    <p>
                      {" "}
                      Lanch a store that comes with Everything You need to
                      apponitments with you.
                    </p>
                  </div>

                  <div class="pt-3">
                    <h5>Apponitment Scheduling</h5>
                    <p>
                      {" "}
                      App Online store Scheduling to Your Website so people book
                      apponitments with you.
                    </p>
                  </div>
                  <div class="pt-3">
                    <h5>Domains</h5>
                    <p>
                      Claim a Custom demain to make it easy for people find Your
                      brand on the web.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mt-4">
              <Accordion.Header>market Your Business</Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>Email</h5>
                  <p>Engage youre audience with beatiful,branded Email.</p>
                </div>

                <div class="pt-3">
                  <h5>Loading Pages</h5>
                  <p>
                    Desing landing pages that grow your audience and help you
                    sell more stuff.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Digital Ads</h5>
                  <p>Reach people on Facebook,Instagram and across the Web.</p>
                </div>
                <div class="pt-3">
                  <h5>Social Media</h5>
                  <p>
                    Bulid Your following with targeted ads organic posting on
                    Facebook,Instagram ,and Twitter.
                  </p>
                </div>

                <div>
                  <div class="pt-3">
                    <h5>Postcards</h5>
                    <p>
                      Send printed Postcards around the help of our address
                      finder.{" "}
                    </p>
                  </div>

                  <div class="pt-3">
                    <h5>Online Store</h5>
                    <p>
                      {" "}
                      Lanch a store that comes with Everything You need to
                      apponitments with you.
                    </p>
                  </div>

                  <div class="pt-3">
                    <h5>Apponitment Scheduling</h5>
                    <p>
                      {" "}
                      App Online store Scheduling to Your Website so people book
                      apponitments with you.
                    </p>
                  </div>
                  <div class="pt-3">
                    <h5>Domains</h5>
                    <p>
                      Claim a Custom demain to make it easy for people find Your
                      brand on the web.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
          <Offcanvas.Header>PLATFORM FEATURES-</Offcanvas.Header>

          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="3">
              <Accordion.Header>Audience Management</Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>Marketing CRM</h5>
                  <p>
                    Get to know your audience and find new ways to market to
                    them.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Singup Forms</h5>
                  <p>Grow Your Audience with a pop-up or embedded form</p>
                </div>

                <div class="pt-3">
                  <h5>Segmentation</h5>
                  <p> Segment Your audience based on shared traits.</p>
                </div>
                <div class="pt-3">
                  <h5>Behavioral Targeting</h5>
                  <p>
                    Target Your messages based on people's purchase
                    behaviour,app activity,and more.
                  </p>
                </div>

                <div>
                  <div class="pt-3">
                    <h5>Predicted Demographices</h5>
                    <p>
                      Get Predictive insights about Your contacts so you can
                      personalize your marketing.
                    </p>
                  </div>

                  <div class="pt-3">
                    <h5>Tags & contacts Profiles</h5>
                    <p>
                      Keep track of what you know about people customizizable{" "}
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="mt-4">
              <Accordion.Header>Creative Tools </Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>content Studio</h5>
                  <p>
                    Sync,store ,and edit all your images and filles in one
                    place.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Dynamic Content</h5>
                  <p>
                    {" "}
                    Perrsonalize individual content blocks within your emails.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Subjects Line Helper</h5>
                  <p>Get real-time feedback on how to refine your Subject.</p>
                </div>
                <div class="pt-3">
                  <h5>Campaingn Templates</h5>
                  <p>
                    100+ pre-designed emails and landing page Templates that fit
                    any messages.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="5">
              <Accordion.Header>Marketing Automation</Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>Customer Journels</h5>
                  <p>
                    Desing personalized journeys using conditional Logic and
                    branching points.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Intergrations</h5>
                  <p>
                    Sync Your store data and connect other tool to unlock more
                    Automation features.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" className="mt-4">
              <Accordion.Header>Insights & Analytics</Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>Reports </h5>
                  <p>
                    Track sales and Campaingn performance in easy-to-digst
                    reports.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Smart Recommendations</h5>
                  <p>
                    Get personalized Recommendations to help you make your next
                    move
                  </p>
                </div>

                <div class="pt-3">
                  <h5>A/B Testing </h5>
                  <p>
                    Test different versions of a single email to see how small
                    changes can impact your results.
                  </p>
                </div>
                <div class="pt-3">
                  <h5>Survey</h5>
                  <p>
                    Gauge Intergrate and customer satisfaction by gatheering
                    feedback.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
          <Offcanvas.Header>NOT SURE WHERE TO STAART?</Offcanvas.Header>

          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="5">
              <Accordion.Header>What's Rights for Me?</Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>E-Commerce and Retail</h5>
                  <p>
                    Driver traffic and boost sales with a marketing platform
                    that seamlessly intefrates with your store.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Mobile and Web Apps</h5>
                  <p>
                    Reach new Customers,send behaviour-based Campaingns and
                    incress engagement with your app.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Startups</h5>
                  <p>
                    Find produts-market fit ,learn form user feedback,and launch
                    your first marketing Campaingns.
                  </p>
                </div>
                <div class="pt-3">
                  <h5>Agencies & Freelancers</h5>
                  <p>
                    Get perks and tools for managing clients when you login our
                    free community ,NewsReader & Co.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Devlopers</h5>
                  <p>
                    Intergrate marketing data , send transctional emails , and
                    bulid Intergrations using our APIs and Documentation.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// // render(<Produts />);

export default Produts;
