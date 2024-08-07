import React from "react";
import location from "../assets/location.svg";
import Japan from "/japan.png";

function Section(props) {


  return (
    <section className="item">
      <div className="section--main">
        <img src={Japan} className="section--image" />

        <div className="subsection">
          <div className="header--location">
            <span>
              <img src={location} alt="Location" />
              <span className="countery">#japan</span>
              <a href="http://mac:5173" className="map--text">
                View on Google Maps
              </a>
            </span>
          </div>

          <h1 className="location">Mount Fuji</h1>

          <h3 className="date">12 Jan, 2021 - 24 Jan, 2021</h3>

          <p className="brief-text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>

      <hr></hr>
    </section>
  );
}

export default Section;
