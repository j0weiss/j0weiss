import React from "react"
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import LinksCards from "../components/LinksCards";


const Links = ({data}) => {
  const edges = data['allLinksYaml']['edges'];

  return (
    <Layout>
      <LinksCards categories={edges}/>
    </Layout>
  )
};

export const query = graphql`
query LinksQuery {
  allLinksYaml {
    edges {
      node {
        name
        links {
          label
          url
        }
      }
    }
  }
}
`;

export default Links;