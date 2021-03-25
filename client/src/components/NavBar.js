import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as up } from "../images/up.svg";
import { ReactComponent as start } from "../images/start.svg";
import { ReactComponent as fin2u } from "../images/fin2u.svg";

export default function NavBar() {
  const [active, setActive] = useState("start");
  return (
    <Container>
      <Nav>
        <NavContainer>
          <StyledNavLink
            className="start"
            onClick={() => setActive("start")}
            exact
            to="/"
          >
            <Start className={active === "start" && "active"} />
            <Span className={active === "start" && "active"}>START</Span>
          </StyledNavLink>
          <StyledNavLink
            className="about"
            onClick={() => setActive("about")}
            to="/about"
          >
            <Fin2u className={active === "about" && "active"} />
            <Span className={active === "about" && "active"}>ÜBER UNS</Span>
          </StyledNavLink>
        </NavContainer>

        <Up href="#">
          <UpSVG />
        </Up>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: whitesmoke;
  z-index: 20;
  height: 8vh;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;

const Nav = styled.nav`
  background: white;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-top: 1px solid #52514f;
  box-shadow: 0 2px 11px 0 rgba(25, 50, 81, 0.2);
`;

const NavContainer = styled.div`
  width: 8rem;
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 4rem;
  font-size: 0.6rem;
  text-decoration: none;

  &.active {
    border-top: 1px solid #0989f7;
  }

  &.start {
    grid-area: setStart;
  }

  &.about {
    grid-area: setAbout;
  }
`;

const Up = styled.a`
  grid-area: setUp;
  background: #52514f;
  height: 24px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border-radius: 10px;
  justify-self: end;
`;

const UpSVG = styled(up)`
  width: 16px;
  height: 14px;
`;

const Start = styled(start)`
  width: 33px;
  height: 24px;
  stroke: none;
  fill: #52514f;

  &.active {
    stroke: none;
    fill: #0989f7;
  }
`;

const Fin2u = styled(fin2u)`
  width: 33px;
  height: 24px;
  fill: #fff;
  stroke: none;
  fill: #52514f;

  &.active {
    stroke: none;
    fill: #0989f7;
  }
`;

const Span = styled.span`
  margin-top: 0.25rem;
  color: #52514f;

  &.active {
    color: #0989f7;
  }
`;
