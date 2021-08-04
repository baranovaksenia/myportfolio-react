import React from "react";
import home1 from "../img/home1.jpg";

export default function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>I work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact me for any web-development or design ideas that you have. My
          knowledge and experience will help bring your project to a new level.
        </p>
        <button>Contact me</button>
      </div>
      <div className="image">
        <img src={home1} alt="developer is working" />
      </div>
    </div>
  );
}
