import React from "react";
import {Link} from "gatsby"
import styled from "styled-components";

import githubIcon from "../images/github.svg";
import gitlabIcon from "../images/gitlab.svg";
import stackOverflowIcon from "../images/stackOverflow.svg";
import twitterIcon from "../images/twitter.svg";
import {BLACK} from "../global";


const Container = styled.nav`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const NavItems = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: ${BLACK};
`;

const Icon = styled.img`
  margin: 10px;
  height: 1.2em;
`;


const Navbar = () => {
  return (
    <Container>
      <NavItems>
        <NavItem to="/">home</NavItem>
        <NavItem to="/links">links</NavItem>
        <NavItem to="">snippets</NavItem>
        <NavItem to="">blogs</NavItem>
      </NavItems>
      <NavItems>
        <a href="https://github.com/j0weiss">
          <Icon src={githubIcon} alt="GitHub"/>
        </a>
        <a href="https://gitlab.com/j0weiss">
          <Icon src={gitlabIcon} alt="GitLab"/>
        </a>
        <a href="https://stackoverflow.com/users/4238964/j0weiss">
          <Icon src={stackOverflowIcon} alt="Stack Overflow"/>
        </a>
        <a href="https://twitter.com/j0weiss">
          <Icon src={twitterIcon} alt="Twitter"/>
        </a>
      </NavItems>
    </Container>
  )
};

export default Navbar;