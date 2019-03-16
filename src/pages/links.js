import React from "react"
import {graphql} from "gatsby";
import Layout from "../components/Layout";


const Links = ({data}) => {
  const edges = data['allLinksYaml']['edges'];

  return (
    <Layout>
      {
        edges.map(edge => {
          return (
            <div key={edge.node.name}>
              <p className="tag">{edge.node.name}</p>
              <ul>
                {
                  edge.node.links.map(link => {
                    return (
                      <li key={link.url}>
                        <a href={link.url}>
                          {link.label}
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
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