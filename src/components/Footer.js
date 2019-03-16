import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

import smileIcon from "../images/smile.svg";


const StyledFooter = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

const FooterImg = styled.img`
  display: inline;
  height: 1em;
  margin: 0 5px;
`;


const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to="/imprint">
        {new Date().getFullYear()} - Built with
        <FooterImg src={smileIcon} alt="fun"/>
        and ...
      </StyledLink>
    </StyledFooter>
  )
};

export default Footer;