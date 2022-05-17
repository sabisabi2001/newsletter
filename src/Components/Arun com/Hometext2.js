import React from "react";

function Hometext2(props) {
  const { head, text, link } = props;
  return (
    <>
      <h2 className="mt-5 mb-3 pt-3">{head}</h2>
      <p className="hometext2 pt-2">{text}</p>
      <a href="#" className="text-success">
        {link}
      </a>
    </>
  );
}

export default Hometext2;
