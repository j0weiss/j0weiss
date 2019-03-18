import React, {Component} from "react"
import {graphql} from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

import Layout from "../components/Layout";
import LinksCards from "../components/LinksCards";


const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FilterInput = styled.input`
  display: none;
  flex: 1;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 5px;
  padding: 2px 5px;
  font: inherit;
  font-size: 1rem;
  color: ${props => props.theme.primaryColor};
  
  &:focus {
    outline: none;
  }
  
  &.active {
    display: block;
  }
`;

const ToggleFilterInput = styled.span`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryColor};
  cursor: pointer;
`;


class Links extends Component {
  constructor() {
    super();

    this.state = {
      allLinks: [],
      filteredLinks: [],
      filterIsActive: false,
      filter: '',
    };

    this.filterInputRef = React.createRef();

    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleAdHocFiltering = this.handleAdHocFiltering.bind(this);
    this.filterLinks = this.filterLinks.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentDidMount() {
    const allLinks = this.props.data['allLinksYaml']['edges'];
    this.setState({
      allLinks: allLinks,
      filteredLinks: allLinks
    });

    window.addEventListener("keyup", this.handleAdHocFiltering);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.filterIsActive) {
      this.filterInputRef.current.focus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleAdHocFiltering);
  }

  toggleFilter(event, filterString = "", state = null) {
    this.setState({
      filterIsActive: state === null ? !this.state.filterIsActive : state,
      filteredLinks: this.filterLinks(""),
      filter: this.state.filterIsActive ? "" : filterString
    })
  }

  handleFiltering(event) {
    const filter = event.target.value.toString();

    this.setState({
      filteredLinks: this.filterLinks(filter),
      filter: filter
    });
  }

  handleAdHocFiltering(event) {
    if (event.key.toString() === "Escape") {
      this.toggleFilter(event, "",false)
    } else if (!this.state.filterIsActive) {
      this.toggleFilter(event, event.key.toString());
    }
  }

  filterLinks(filter) {
    if (filter === "") {
      return this.state.allLinks;
    }

    return this.state.allLinks.filter(item => {
      return item.node['name'].toLowerCase().includes(filter.toLowerCase());
    });
  }

  render() {
    return (
      <Layout>
        <Filter>
          <FilterInput type="text"
                       className={this.state.filterIsActive ? "active" : ""}
                       value={this.state.filter}
                       onChange={this.handleFiltering}
                       ref={this.filterInputRef}
          />
          <ToggleFilterInput onClick={this.toggleFilter}>
            <FontAwesomeIcon icon={this.state.filterIsActive ? faTimes : faSearch}/>
          </ToggleFilterInput>
        </Filter>
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