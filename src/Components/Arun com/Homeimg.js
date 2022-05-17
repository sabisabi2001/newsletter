import React from "react";

function Homeimg(props) {
  const { imgpath } = props;
  return (
    <>
      <img
        src={imgpath}
        className="img-fluid"
        alt=""
        height="100%"
        width="100%"
      />
    </>
  );
}

export default Homeimg;
