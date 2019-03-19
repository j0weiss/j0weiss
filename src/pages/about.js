import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";

import Layout from "../components/Layout";


const StyledLayout = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 750px) {
    width: 75%;
  }
  
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Description = styled.div``;

const Image = styled(Img)`
  width: 250px;
  height: 250px;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 125px;
  object-fit: contain;
`;

const Emph = styled.span`
  color: ${props => props.theme.primaryColor};
  font-style: italic;
`;

export default ({data}) => {
  return (
    <Layout>
      <StyledLayout>
        <Image fixed={data.file.childImageSharp.fixed}/>
        <Description>
          <h1>
            this is me.
          </h1>
          <p>my name is <Emph>johannes</Emph>.</p>
          <p>i'm a full stack developer located in hamburg (germany).</p>
          <p>
            my main goal is to learn new things, experiment with technologies and having fun doing that.
            i'm interested in many things but i think it all comes down to building products which are nice to use.
            so just to list a few things:
          </p>
          <ul>
            <li><Emph>frontend development</Emph> - especially singe page applications, e.g. react, vue.js</li>
            <li><Emph>ui/ux</Emph> - comes as a part of frontend development, but in my opinion is one of the most
              difficult components
            </li>
            <li><Emph>web performance</Emph> - is currently a huge part of my day job</li>
            <li><Emph>...</Emph></li>
          </ul>
          <p>this site is an attempt to act as a personal hub for all the stuff i learn.</p>
        </Description>
      </StyledLayout>
    </Layout>
  )
};

export const query = graphql`
  query {
    file(relativePath: { eq: "images/portrait.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;