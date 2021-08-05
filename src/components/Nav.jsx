import React from "react";
import styled from "styled-components";
import { Link, Router } from "react-router-dom";

export default function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Ksenia Baranova</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/projects">My projects</Link>
        </li>
        <li>
          <Link to="/contacts">Contact me</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: #fff;
  }
  ul {
    display: flex;
  }
  h1 {
    a {
      font-size: 1.2rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
    }
  }
  li {
    padding-left: 9.5rem;
    position: relative;
    a {
      font-size: 1rem;
    }
  }
`;
