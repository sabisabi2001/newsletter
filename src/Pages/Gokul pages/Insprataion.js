import { Accordion, Offcanvas } from "react-bootstrap";
import { useState, React, useEffect } from "react";
import { GiNewspaper } from "react-icons/gi";
import img1 from "../../Assets/Gokul img/img1.avif";
import img2 from "../../Assets/Gokul img/img2.avif";
import img3 from "../../Assets/Gokul img/img3.avif";
import img4 from "../../Assets/Gokul img/img4.jpg";

function Insprataion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <span onClick={handleShow}>Inspiration</span>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <GiNewspaper size={50} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="3">
              <Accordion.Header>Podcasts</Accordion.Header>
              <Accordion.Body>
                <hr />
                <div class="pt-3">
                  <p className="pt-3">
                    A collection of original content that celebrates the
                    entrepreneurial spirit.
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <h5>PODCASTS —</h5>
                  <img src={img1} className="img-fluid" alt="" />
                  <h5 class="pt-3">Partners: Season 2</h5>
                  <p>
                    Hrishikesh Hirway welcomes 7 noteworthy partners who created
                    something extraordinary together.
                  </p>
                </div>

                <div class="pt-3">
                  <img src={img2} className="img-fluid" alt="" />
                  <h5 class="pt-3">Going Through It</h5>
                  <p>
                    Jenny Yang chats with 15 guests to reflect on the elders who
                    influenced them at just the right time.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="mt-4">
              <Accordion.Header>Stores </Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <p className="pt-3">
                    A collection of original content that celebrates the
                    entrepreneurial spirit.
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <h5>ORIGINAL SERIES —</h5>
                  <img src={img3} className="img-fluid" alt="" />
                  <h5 class="pt-3">Switching Off.</h5>
                  <p>Family comes first, especially this time of year</p>
                </div>

                <div class="pt-3">
                  <img src={img4} className="img-fluid" alt="" />
                  <h5 class="pt-3">A Family Business</h5>
                  <p>
                    Kick start the holidays with this Second Act episode chock
                    full of food, family, and tradition.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="mt-4">
              <Accordion.Header>Films </Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <p className="pt-3">
                    A collection of original content that celebrates the
                    entrepreneurial spirit.
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <h5>FILMS —</h5>
                  <img src={img1} className="img-fluid" alt="" />
                  <h5 class="pt-3">Welcome to Noodle School</h5>
                  <p>
                    Students come here to learn from the best and get their shot
                    at a billion-dollar industry.
                  </p>
                </div>

                <div class="pt-3">
                  <img src={img2} className="img-fluid" alt="" />
                  <h5 class="pt-3">Crown Candy</h5>
                  <p>
                    This 100-year-old candy store in St. Louis is rich in
                    history—and chocolate.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <hr />

          <Accordion defaultActiveKey="0" className="mt-4">
            <Accordion.Item eventKey="3">
              <Accordion.Header>Expert Insights</Accordion.Header>
              <Accordion.Body>
                <hr />
                <div class="pt-3">
                  <p className="pt-3">
                    Case studies and how-tos to take you from startup to
                    scale-up and beyond.
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <h5>WORKSHOP —</h5>
                  <img src={img3} className="img-fluid" alt="" />
                  <h5 class="pt-3">
                    How to win customers without social media
                  </h5>
                  <p>
                    As social media ads become less effective, how else should
                    you go about acquiring new customers?
                  </p>
                </div>

                <div class="pt-3">
                  <img src={img2} className="img-fluid" alt="" />
                  <h5 class="pt-3">The $10 million T-shirt</h5>
                  <p>
                    How did a ‘Black Founders Matter’ T-shirt design transform
                    into a venture capital firm? According to founder Marceau
                    Michel, it was almost completely by accident.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="mt-4">
              <Accordion.Header>Industry Trends </Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <p className="pt-3">
                    A collection of original content that celebrates the
                    entrepreneurial spirit.
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <h5>ORIGINAL SERIES —</h5>
                  <img src={img3} className="img-fluid" alt="" />
                  <h5 class="pt-3">Switching Off.</h5>
                  <p>Family comes first, especially this time of year</p>
                </div>

                <div class="pt-3">
                  <img src={img4} className="img-fluid" alt="" />
                  <h5 class="pt-3">A Family Business</h5>
                  <p>
                    Kick start the holidays with this Second Act episode chock
                    full of food, family, and tradition.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="mt-4">
              <Accordion.Header>Smart Living </Accordion.Header>
              <Accordion.Body>
                <div class="pt-3">
                  <p className="pt-3">
                    A collection of original content that celebrates the
                    entrepreneurial spirit.
                  </p>
                </div>
                <hr />
                <div class="pt-3">
                  <h5>FILMS —</h5>
                  <img src={img1} className="img-fluid" alt="" />
                  <h5 class="pt-3">Welcome to Noodle School</h5>
                  <p>
                    Students come here to learn from the best and get their shot
                    at a billion-dollar industry.
                  </p>
                </div>

                <div class="pt-3">
                  <img src={img2} className="img-fluid" alt="" />
                  <h5 class="pt-3">Crown Candy</h5>
                  <p>
                    This 100-year-old candy store in St. Louis is rich in
                    history—and chocolate.
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

export default Insprataion;
