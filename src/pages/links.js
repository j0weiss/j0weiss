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
  border: 1px solid ${props => props.theme.darkColor};
  border-radius: 5px;
  padding: 2px 10px;
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
      filterString: '',
    };

    this.filterInputRef = React.createRef();

    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleAdHocFiltering = this.handleAdHocFiltering.bind(this);
    this.filterLinks = this.filterLinks.bind(this);
    this.filterLinkItems = this.filterLinkItems.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
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
      filterString: this.state.filterIsActive ? "" : filterString
    })
  }

  handleFiltering(event) {
    const filterString = event.target.value.toString();

    this.setState({
      filteredLinks: this.filterLinks(filterString),
      filterString: filterString
    });
  }

  handleAdHocFiltering(event) {
    if (event.key.toString() === "Escape") {
      this.toggleFilter(event, "",false)
    } else if (!this.state.filterIsActive) {
      this.toggleFilter(event, event.key.toString());
    }
  }

  filterLinks(filterString) {
    if (filterString === '' || filterString === '#') {
      return this.state.allLinks;
    }

    const categoryString = this.getCategory(filterString);
    const filterStringWithoutCategory = this.getFilterStringWithoutCategory(filterString);

    return this.filterLinkItems(filterStringWithoutCategory, categoryString);
  }

  getCategory(filterString) {
    const subStrings = filterString.split(' ');
    const potentialCategories = subStrings.filter(string => /^#/.test(string));

    if (potentialCategories.length === 0) {
      return '';
    }

    return potentialCategories[0].split('#')[1];
  }

  getFilterStringWithoutCategory(filterString) {
    const subStrings = filterString
      .split(' ')
      .filter(string => !/^#/.test(string))
      .filter(string => string !== '');

    if (subStrings.length === 1) {
      return subStrings[0];
    }

    return subStrings.reduce((previous, current) => `${previous} ${current}`, '');
  }

  filterLinkItems(filterString, categoryString = '') {
    const filteredByCategory = categoryString !== '' ? this.filterByCategory(categoryString) : this.state.allLinks;

    const filteredNodes = filteredByCategory.map(item => {
      let filteredItem = {};
      filteredItem['node'] = {};
      filteredItem['node']['name'] = item.node.name;

      filteredItem.node['links'] = item.node['links'].filter(link => {
        const labelIncludesFilterString = link['label'].toLowerCase().includes(filterString.toLowerCase());
        const urlIncludesFilterString = link['url'].toLowerCase().includes(filterString.toLowerCase());

        return labelIncludesFilterString || urlIncludesFilterString;
      });

      return filteredItem;
    });

    return filteredNodes.filter(item => {
      return item.node['links'].length !== 0;
    });
  }

  filterByCategory(categoryString) {
    return this.state.allLinks.filter(item => {
      return item.node['name'].toLowerCase().includes(categoryString.toLowerCase());
    });
  }

  render() {
    return (
      <Layout>
        <Filter>
          <FilterInput type="text"
                       className={this.state.filterIsActive ? "active" : ""}
                       value={this.state.filterString}
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