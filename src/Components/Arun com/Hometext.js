import React from "react";

function Hometext(props) {
  const { head, text, buttontitle } = props;
  return (
    <>
      <h2 className="mt-5 mb-3 pt-3">{head}</h2>
      <p className="hometext2 pt-2">{text}</p>
      <button className="fs-5 btn btn-outline-success mt-4 mb-1 text-dark">
        {buttontitle}
      </button>
    </>
  );
}

export default Hometext;
