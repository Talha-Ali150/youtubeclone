import React from "react";
import "./index.css";
import { ReactComponent as Options } from "../../images/options.svg";

export default function VideoCard(props) {
  return (
    <div className="cardContainer1">
      <div className="imgContainer1">
        <img className="imgStyling1" src={props.imgSrc} />
      </div>
      <div className="section">
        <div className="section1">
          <img className="imgStyling2" src={props.logoSrc} />
        </div>
        <div className="section2">
          <p className="headingContainer1">{props.heading1}</p>
          <div className="headingContainer2">
            <p className="headingContainer2Section1">{props.heading2} </p>
            <p className="headingContainer2Section2">{props.heading3}</p>
          </div>
        </div>
        <div className="section3">
          <Options />
        </div>
      </div>
    </div>
  );
}
