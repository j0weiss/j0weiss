import React, {Component} from "react";
import {Link} from "gatsby"
import styled, { withTheme } from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faGitlab} from "@fortawesome/free-brands-svg-icons/faGitlab";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faStackOverflow} from "@fortawesome/free-brands-svg-icons/faStackOverflow";


const Container = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  
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
    const activeLinkColor = this.props.theme.darkColor;
    return (
      <Container>
        <NavItems>
          <NavItem to="/" activeStyle={{color: activeLinkColor}}>home</NavItem>
          <NavItem to="/links" activeStyle={{color: activeLinkColor}}>links</NavItem>
          <NavItem to="/snippets" activeStyle={{color: activeLinkColor}}>snippets</NavItem>
          <NavItem to="/blogs" activeStyle={{color: activeLinkColor}}>blogs</NavItem>
        </NavItems>
        <SocialNavItems>
          <NavLink href="https://github.com/j0weiss" color={"#333333"}>
            <FontAwesomeIcon icon={faGithub}/>
          </NavLink>
          <NavLink href="https://gitlab.com/j0weiss" color={"#fc6d26"}>
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