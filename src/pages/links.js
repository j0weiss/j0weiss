import React, {Component} from "react"
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import LinksCards from "../components/LinksCards";


class Links extends Component {
  constructor() {
    super();

    this.state = {
      allLinks: [],
      filteredLinks: [],
      filter: ''
    };

    this.handleFiltering = this.handleFiltering.bind(this);
    this.filterLinks = this.filterLinks.bind(this);
  }

  componentDidMount() {
    const allLinks = this.props.data['allLinksYaml']['edges'];
    this.setState({
      allLinks: allLinks,
      filteredLinks: allLinks
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state);
  }

  handleFiltering(event) {
    const filter = event.target.value.toString();

    this.setState({
      filteredLinks: this.filterLinks(filter),
      filter: filter
    });
  }

  filterLinks(filter) {
    if (filter === "") {
      return this.state.allLinks;
    }

    return this.state.allLinks.filter(item => {
      return item.node['name'].toLowerCase().includes(filter);
    });
  }

  render() {
    return (
      <Layout>
        <form>
          <input type="text" value={this.state.filter} onChange={this.handleFiltering}/>
        </form>
        <LinksCards categories={this.state.filteredLinks}/>
      </Layout>
    )
  }
}

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