import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons/faSmile'


const StyledFooter = styled.footer`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.darkColor};
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;


const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to="/imprint">
        {new Date().getFullYear()} - Built with
        <StyledFontAwesomeIcon icon={faSmile}/>
        and ...
      </StyledLink>
    </StyledFooter>
  )
};

export default Footer;