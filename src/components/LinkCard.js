import React, {Component} from "react";
import styled from "styled-components";


const Card = styled.a`
  padding: 5px 20px;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 5px;
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
`;

const Label = styled.p`
  margin: 0;
  font-weight: 700;
`;

const URL = styled.p`
  margin: 0;
  font-style: italic;
`;


class LinkCard extends Component {
  render() {
    return (
      <Card href={this.props.url}>
        <Label>{this.props.label}</Label>
        <URL>{this.props.url}</URL>
      </Card>
    )
  }
}

export default LinkCard;