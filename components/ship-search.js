import React from "react";
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  PoweredBy
} from "react-instantsearch-dom";
import { InstantSearch } from "./instantsearch";

const HitComponent = ({ hit }) => (
  <div className="hit">
    <div>
      <div className="hit-picture">
        <img src={hit.media} alt={hit.name} />
      </div>
    </div>
    <div className="hit-content">
      <div>
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="manufacturer" hit={hit} />
      </div>
      <div className="hit-type">
        <Highlight attribute="focus" hit={hit} />
      </div>
      <div className="hit-type">
        <Highlight attribute="url" hit={hit} />
        <a href={hit.url} target="_blank" rel="noopener noreferrer">
          {hit.url}
        </a>
      </div>
    </div>
  </div>
);

export default function ShipSearch(props) {
  return (
    <InstantSearch
      appId="LBEZ4EW674"
      apiKey="a75591ffd502c0f33a9ba1735b496208"
      indexName="sc_ships"
      resultsState={props.resultsState}
      onSearchStateChange={props.onSearchStateChange}
      searchState={props.searchState}
      createURL={props.createURL}
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
        <PoweredBy />
      </footer>
    </InstantSearch>
  );
}
