import React from "react";
import {Link} from "gatsby"
import styled from "styled-components";

import githubIcon from "../images/github.svg";
import gitlabIcon from "../images/gitlab.svg";
import stackOverflowIcon from "../images/stackOverflow.svg";
import twitterIcon from "../images/twitter.svg";


const Container = styled.nav`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(120deg, #112d4e, #3f72af);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const NavItems = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
`;

const SocialNavItems = styled(NavItems)`
  @media (max-width: 500px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: inherit;
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
      <SocialNavItems>
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
      </SocialNavItems>
    </Container>
  )
};

export default Navbar;