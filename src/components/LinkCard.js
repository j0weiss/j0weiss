import React, {Component} from "react";
import styled from "styled-components";


const Card = styled.a`
  padding: 5px 20px;
  border: 1px solid ${props => props.theme.darkColor};
  border-radius: 5px;
  text-decoration: none;
  color: ${props => props.theme.textColor};
  
  &:hover {
    border-color: ${props => props.theme.primaryColor};
  }
`;

const Label = styled.p`
  margin: 0;
  font-weight: 700;
`;

const URL = styled.p`
  margin: 0;
  font-style: italic;
  word-break: break-word;
`;


class LinkCard extends Component {
  render() {
    return (
      <Card href={this.props.url} target="_blank" rel="noopener noreferrer">
        <Label>{this.props.label}</Label>
        <URL>{this.props.url}</URL>
      </Card>
    )
  }
}

export default LinkCard;