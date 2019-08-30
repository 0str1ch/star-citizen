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
import CustomPoweredBy from "./custom-powered-by";
import CustomInfiniteHits from "./custom-infinite-hits";
import InfiniteHits from "./infinite-scroll-hits-function";

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
      <Configure hitsPerPage={5} />
      <header>
        <h1>Search all of the ships and vehicles in Star Citizen</h1>
        <SearchBox />
      </header>
      <content>
        <menu>
          <ClearRefinements />
          <Pagination />
          <HitsPerPage
            defaultRefinement={5}
            items={[
              { value: 5, label: "Show 5 results" },
              { value: 10, label: "Show 10 results" },
              { value: 25, label: "Show 25 results" }
            ]}
          />
          <RefinementList
            attribute="manufacturer"
            transformItems={items => orderBy(items, "label", "asc")}
            showMore
          />
          <style jsx global>
            {`
              .ais-RefinementList-list,
              .ais-InfiniteHits-list,
              .ais-Pagination-list {
                list-style: none;
              }
            `}
          </style>
        </menu>
        <div>
          <InfiniteHits hitComponent={HitComponent} />
        </div>
      </content>
      <footer>
        <PoweredBy />
      </footer>
    </InstantSearch>
  );
}
