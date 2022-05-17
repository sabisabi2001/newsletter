import React from "react";
import { Col } from "react-bootstrap";

function Homelogtext(props) {
  const { imgpath, text, height, width } = props;
  return (
    <>
      <Col>
        <img
          src={imgpath}
          className="img-fluid"
          height={height}
          width={width}
          alt=""
        />
      </Col>
      <Col>
        <b>{text}</b>
      </Col>
    </>
  );
}

export default Homelogtext;
