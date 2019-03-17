import React from "react";
import styled from "styled-components";


const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
`;

const Card = styled.div`
  height: 5rem;
  padding: 20px;
  background: #FFFFFF;
  color: #112d4e;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const CategoryCard = styled(Card)`
  font-size: 3rem;
  font-weight: 100;
  display: grid;
  justify-content: center;
  align-content: center;
  background: #dbe2ef;
  color: #3f72af;
`;

export default ({categories}) => {
  return (
    <Categories>
      {
        categories.map(category =>
          <Category key={category.node.name}>
            <CategoryCard>{category.node.name}</CategoryCard>
            {
              category.node.links.map(link =>
                <Card>{link.label}</Card>
              )
            }
          </Category>
        )
      }
    </Categories>
  )
}