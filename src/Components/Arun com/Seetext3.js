import React from "react";

function Seetext3(props) {
  const { head, text } = props;
  return (
    <>
      <h2 className="mt-2">{head}</h2>
      <p className="mt-2 mb-3 fs-5">{text}</p>
    </>
  );
}

export default Seetext3;
