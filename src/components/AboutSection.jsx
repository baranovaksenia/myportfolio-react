import React from "react";
import home1 from "../img/home1.jpg";
//styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

export default function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>I work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact me for any web-development or design ideas that you have.
          <br></br>
          My knowledge and experience will help bring your project to a new
          level.
        </p>
        <button>Contact me</button>
      </Description>
      <Image>
        <img src={home1} alt="developer is working" />
      </Image>
    </About>
  );
}
