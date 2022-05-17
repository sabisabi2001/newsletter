import React from "react";
import "../Sabi com/Mark.css";
import bootstrap from "bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
import Markting from "../../Pages/Sabi pages/Markting";
import { Link } from "react-router-dom";

function Firstbox(props) {
  return (
    <div className="px-3 mx-auto">
      <h3 className="text-center pt-3 pb-2">{props.name}</h3>
      <p>{props.name1}</p>
      <span className="mt-5 text-center">{props.name2}</span>
      <p></p>
      <span>{props.name3}</span>
      <h1>{props.name4}</h1>
      <p>{props.name5}</p>
      <p className="text-center pt-1 pb-1">
        <Button variant="secondary">{props.name6}</Button>{" "}
      </p>
      <p>{props.name7}</p>
      <h4 className="mx-auto pt-1 pb-2">{props.name8} </h4>
      <i className="fas fa-check"></i>
      <span className="">{props.name9}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="">{props.name10}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="">{props.name11}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="">{props.name12}</span>
      <p></p>
      <i className="fas fa-check"></i>
      <span className="">{props.name13}</span>
      <p></p>
      <Link to="#" className="mark">
        {props.name14}
      </Link>
      <hr></hr>

      <p className="pb-1 pt-1"> {props.name15}</p>
    </div>
  );
}

export default Firstbox;
