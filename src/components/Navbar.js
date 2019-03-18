import React, {Component} from "react";
import {Link} from "gatsby"
import styled, { withTheme } from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faGitlab} from "@fortawesome/free-brands-svg-icons/faGitlab";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons/faStackOverflow";


const Container = styled.nav`
  margin: 0 10px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  
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
  color: ${props => props.theme.primaryColor};
  
  &:hover {
    color: ${props => props.theme.darkColor}
  }

  &.active {
    color: ${props => props.theme.darkColor};
  }
`;

const NavLink = styled.a`
  margin: 10px;
  color: ${props => props.theme.primaryColor};
  
  &:hover {
    color: ${props => props.color};
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <NavItems>
          <NavItem to="/" activeClassName="active">home</NavItem>
          <NavItem to="/links" activeClassName="active">links</NavItem>
          <NavItem to="/snippets" activeClassName="active">snippets</NavItem>
          <NavItem to="/blogs" activeClassName="active">blogs</NavItem>
        </NavItems>
        <SocialNavItems>
          <NavLink href="https://github.com/j0weiss" color={"#333333"}>
            <FontAwesomeIcon icon={faGithub}/>
          </NavLink>
          <NavLink href="https://gitlab.com/j0weiss" color={"#e24329"}>
            <FontAwesomeIcon icon={faGitlab}/>
          </NavLink>
          <NavLink href="https://stackoverflow.com/users/4238964/j0weiss" color={"#f48024"}>
            <FontAwesomeIcon icon={faStackOverflow}/>
          </NavLink>
          <NavLink href="https://twitter.com/j0weiss" color={"#1da1f2"}>
            <FontAwesomeIcon icon={faTwitter}/>
          </NavLink>
        </SocialNavItems>
      </Container>
    )
  }
}

export default withTheme(Navbar);