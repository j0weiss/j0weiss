import React from "react";
import styled from "styled-components";

import LinkCard from "../components/LinkCard";


const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  margin-bottom: 20px;
`;
const CategoryLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const CategoryName = styled.h1`
  color: ${props => props.theme.textColor};
`;

export default ({categories}) => {
  return (
    <Categories>
      {
        categories.map(category =>
          <Category key={category.node.name}>
            <CategoryName>{category.node.name}</CategoryName>
            <CategoryLinks>
            {
              category.node.links.map(link =>
                <LinkCard key={link.url} url={link.url} label={link.label}/>
              )
            }
            </CategoryLinks>
          </Category>
        )
      }
    </Categories>
  )
}