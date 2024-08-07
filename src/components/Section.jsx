import React from "react";
import location from "../assets/location.svg";
import Japan from "/japan.png";

function Section(props) {
  return (
    <section className="item">
      <div className="section--main">
        <img src={props.coverImg} className="section--image" alt={props.location} />

        <div className="subsection">
          <div className="header--location">
            <span>
              <img src={location} alt="Location" />
              <span className="country">{props.country}</span>
              <a href={props.mapLink} className="map--text" target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </span>
          </div>

          <h1 className="location">{props.location}</h1>

          <h3 className="date">
            {props.startDate} - {props.endDate}
          </h3>

          <p className="brief-text">{props.placeSummary}</p>
        </div>
      </div>

      <hr />
    </section>
  );
}

export default Section;
