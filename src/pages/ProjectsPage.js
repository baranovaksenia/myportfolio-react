import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import project1 from "../img/project1.jpg";
import project2 from "../img/project2.jpg";
import project3 from "../img/project3.jpg";
export default function ProjectsPage() {
  return (
    <Work>
      <Project>
        <h2>Project One</h2>
        <div className="line"></div>
        <Link>
          <img src={project1} alt="project one" />
        </Link>
      </Project>
      <Project>
        <h2>Project Two</h2>
        <div className="line"></div>
        <Link>
          <img src={project2} alt="project two" />
        </Link>
      </Project>
      <Project>
        <h2>Project Three</h2>
        <div className="line"></div>
        <Link>
          <img src={project3} alt="project three" />
        </Link>
      </Project>
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #fff;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
