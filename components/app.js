import React from "react";
import PropTypes from "prop-types";
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination
} from "react-instantsearch-dom";
import { InstantSearch } from "./instantsearch";

const HitComponent = ({ hit }) => (
  <div className="hit">
    <div>
      <div className="hit-picture">
        <img src={`${hit.media}`} />
      </div>
    </div>
    <div className="hit-content">
      <div>
        <Highlight attribute="name" hit={hit} />
        <span> - {hit.name}</span>
        <span> - {hit.manufacturer} stars</span>
      </div>
      <div className="hit-type">
        <Highlight attribute="type" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={hit} />
      </div>
    </div>
  </div>
);

HitComponent.propTypes = {
  hit: PropTypes.object
};

export default class extends React.Component {
  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func
  };

  render() {
    return (
      <InstantSearch
        appId="LBEZ4EW674"
        apiKey="a75591ffd502c0f33a9ba1735b496208"
        indexName="sc_ships"
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
      >
        <Configure hitsPerPage={12} />
        <header>
          <h1>Search all of the ships and vehicles in Star Citizen</h1>
          <SearchBox />
        </header>
        <content>
          <menu>
            <RefinementList attribute="categories" />
          </menu>
          <results>
            <Hits hitComponent={HitComponent} />
          </results>
        </content>
        <footer>
          <Pagination />
          <div>
            See{" "}
            <a href="https://github.com/algolia/react-instantsearch/tree/master/examples/next">
              source code
            </a>{" "}
            on github
          </div>
        </footer>
      </InstantSearch>
    );
  }
}
