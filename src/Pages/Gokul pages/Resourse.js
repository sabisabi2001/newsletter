import { Accordion, Offcanvas } from "react-bootstrap";
import { useState, React, useEffect } from "react";
import { GiNewspaper } from "react-icons/gi";
// import img4 from "../../Assets/Gokul img/img4.jpg";
// import mail from "../../Assets/Gokul img/mail.webp";
function Resourse() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <span onClick={handleShow}>Resources</span>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>LEARN-</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className="pt-3">NewsReader 101</h4>
          <h4 className="pt-3">Help Center</h4>
          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Marketing Library</Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <h5>Marketing Library</h5>
                  <p>
                    Explore our collection of resourse to help Bulid your
                    Business and boost your degital market
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <p>
                    <b>MARKETING TOOLS AND TACTICS</b>
                  </p>
                  <h5 className="pt-2">E-Commerce</h5>
                  <h5 className="pt-2">Digital Content</h5>
                  <h5 className="pt-2">Marketing Automations</h5>
                  <h5 className="pt-2">Website</h5>
                  <h5 className="pt-2">Email</h5>
                  <h5 className="pt-2"> Spcial Media</h5>
                </div>
                <hr />
                <div class="pt-3">
                  <GiNewspaper size={50} />
                  <h5 className="pt-3">
                    {" "}
                    E-commerce Automations: Time-Saving Techniques for
                    E-commerce
                  </h5>
                  <p>
                    See how NewsReader’s e-commerce automations can save you
                    time and help you convert more first-time buyers into repeat
                    customers.
                  </p>
                </div>

                <hr />
                <p>
                  <b>BUSINESS STAGES-</b>
                </p>

                <div class="pt-3">
                  <h5>Preap & Start</h5>
                  <p>
                    Learn to Write a Business plan a brand ,and turn your
                    ambitaon into a successful Business.
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
                  <h5>Manage & RUN</h5>
                  <p>
                    {" "}
                    Off and running? find tips to helps you lead ,manage ,and
                    make your Business even better.
                  </p>
                </div>
                <div class="pt-3">
                  <h5>Grow & Scal</h5>
                  <p>
                    Whether you want to grow your team,your following or your
                    sales ,we've got ideas.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
          <Offcanvas.Header>COMMUNITY-</Offcanvas.Header>

          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="3">
              <Accordion.Header>For Freelancers & Agencies</Accordion.Header>
              <Accordion.Body>
                <hr />
                <div class="pt-3">
                  <GiNewspaper size={50} />
                  <p className="pt-3">
                    Join our community for freelancers and agencies to unlock
                    tools for managing clients and perks to grow your business.
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <h5>Features for helping clients</h5>
                  <p>
                    Get access to tools in Your News Letter account designed
                    just for freelancers and Agencies like You.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>A guided path to partnership</h5>
                  <p>
                    See all the perks You can unlock as You grow toward becoming
                    a News Letter partner.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Get Inspired by Your peers</h5>
                  <p>
                    Get up on tips and marketing wisdom from freelancers and
                    Agencies around the word.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="mt-4">
              <Accordion.Header>For Devlopers </Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <GiNewspaper size={40} />
                  <p className="pt-3">
                    Our APIs make it easy to bring data from your app into
                    NewsReader, so you can manage your audience, trigger
                    event-based emails, and more.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Marketing ApI</h5>
                  <p>
                    Use custom data from your app to power timely, relevant
                    marketing campaigns.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Transactional API</h5>
                  <p>
                    Send targeted and event-driven emails and handle and parse
                    inbound email from your users.
                  </p>
                </div>

                <div class="pt-3">
                  <h5>Release Notes</h5>
                  <p>The latest updates to our APIs and developer tools.</p>
                </div>

                <div class="pt-3">
                  <h5>Transactional Email</h5>
                  <p>
                    Deliver targeted, event-driven messages at scale using our
                    Transactional API or SMTP integration.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h4 className="pt-4">Hire A Trusted Partner</h4>
          <h5 className="pt-4">App Integrations</h5>

          <p>
            Connect your digital tools so you can do more with your marketing.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// // render(<Produts />);

export default Resourse;
