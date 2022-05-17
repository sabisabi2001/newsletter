import React from "react";

function Homekepp(props) {
  const { imgpath, height, width, head, text, link } = props;
  return (
    <>
      <img src={imgpath} className="" height={height} width={width} alt="" />
      <h3 className="mt-3 mb-3">{head}</h3>
      <p className="mt-1 mb-3">{text}</p>
      <a href="#" className="text-success">
        <b> {link} </b>
      </a>
    </>
  );
}

export default Homekepp;
