import React from "react";
import { orderBy } from "lodash";
import algoliasearch from "algoliasearch/lite";
import {
  RefinementList,
  SearchBox,
  Hits,
  HitsPerPage,
  Configure,
  Highlight,
  Pagination,
  ToggleRefinement,
  ClearRefinements,
  PoweredBy
} from "react-instantsearch-dom";
import { InstantSearch } from "./instantsearch";

const searchClient = algoliasearch(
  "LBEZ4EW674",
  "a75591ffd502c0f33a9ba1735b496208"
);

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
      indexName="sc_ships"
      searchClient={searchClient}
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
          <ClearRefinements />
          <HitsPerPage
            defaultRefinement={5}
            items={[
              { value: 5, label: "Show 5 hits" },
              { value: 10, label: "Show 10 hits" }
            ]}
          />
          <RefinementList
            attribute="manufacturer"
            transformItems={items => orderBy(items, "label", "asc")}
            showMore
          />
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