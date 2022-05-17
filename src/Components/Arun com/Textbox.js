import React from "react";

function Textbox(props) {
  const { name, type } = props;
  return (
    <>
      <div className="mb-3">
        <label for="formFile" className="form-label">
          <b> {name} </b>
        </label>
        <input
          className="form-control"
          type={`${type}`}
          id="formFile"
          required
        />
      </div>
    </>
  );
}

export default Textbox;
