import React from "react";
import { orderBy } from "lodash";
import algoliasearch from "algoliasearch/lite";
import {
  RefinementList,
  Configure,
  CurrentRefinements,
  connectStateResults,
  PoweredBy
} from "react-instantsearch-dom";
import { InstantSearch } from "./instantsearch";
import InfiniteHits from "./infinite-scroll-hits";
import CustomSearchBox from "./custom-search-box";
import UIButton from "../ui-button";
import CustomClearRefinements from "./custom-clear-refinements";
import CustomAutocomplete from "./custom-autocomplete";
import Accordion from "../accordion";
import RefinePanel from "./refine-panel";

const searchClient = algoliasearch(
  "LBEZ4EW674",
  "a75591ffd502c0f33a9ba1735b496208"
);

export default function ShipSearch(props) {
  return (
    <InstantSearch
      indexName="sc"
      searchClient={searchClient}
      resultsState={props.resultsState}
      onSearchStateChange={props.onSearchStateChange}
      searchState={props.searchState}
      createURL={props.createURL}
      stalledSearchDelay={500}
    >
      <section id="application">
        <menu>
          <Configure hitsPerPage={2} />
          <CustomSearchBox />
          <RefinePanel />
          {/* <CurrentRefinements clearsQuery /> */}
          <style jsx global>
            {`
              .ais-RefinementList-list,
              .ais-InfiniteHits-list,
              .ais-Pagination-list {
                list-style: none;
              }

              section#application {
                display: flex;
                flex-direction: column;
                overflow: hidden;
              }

              @media (min-width: 1200px) {
                section#application {
                  display: grid;
                  grid-template-columns: minmax(18rem, 1fr) minmax(
                      calc(100% - 18rem),
                      1fr
                    );
                  height: calc(100vh - 2rem);
                }
              }

              menu {
                position: relative;
                overflow-y: scroll;
                overflow-x: hidden;
                margin: 0;
                padding: 0;
                list-style: none;
                background: var(--dark-bg);
                color: var(--highlight-hue);
                width: 100%;
                height: 100%;
              }

              menu .menu-panel {
                padding: var(--outer-padding) var(--inner-padding);
                overflow: hidden;
              }

              content {
                overflow-y: scroll;
                -webkit-overflow-scrolling: touch;
                background: var(--primary-hue);
                height: 100%;
                min-height: 100vh;
              }
              li.ais-RefinementList-item {
                height: 2rem;
                border: 1px solid var(--highlight-hue);
                border-radius: var(--border-radius);
                background: var(--dark-grey);
                display: flex;
                place-content: flex-start;
                padding: 0 0.5rem;
                width: 100%;
                margin-top: 1rem;
                color: var(--highlight-hue);
                box-shadow: var(--box-shadow-blue);
                transition: all 0.1s ease-in-out;
              }

              li.ais-RefinementList-item--selected,
              li.ais-RefinementList-item:hover {
                color: var(--glow);
                border: 1px solid var(--glow);
                box-shadow: var(--box-shadow-glow);
              }

              li.ais-RefinementList-item--selected {
                font-weight: 700;
              }

              .ais-RefinementList-label {
                width: 100%;
                position: relative;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                display: flex;
                place-content: space-between;
                place-items: center;
              }

              .ais-RefinementList-labelText {
                font-size: var(--text-xsmall);
                text-transform: uppercase;
                overflow: hidden;
                text-overflow: ellipsis;
                letter-spacing: 0.05rem;
              }

              .ais-RefinementList-count {
                font-size: 50%;
                width: 1rem;
                height: 2rem;
                vertical-align: middle;
                line-height: 2rem;
                color: var(--glow);
              }
            `}
          </style>
          <footer></footer>
        </menu>
        <content>
          <IndexResults>
            <InfiniteHits />
          </IndexResults>
          <PoweredBy />
        </content>
      </section>
    </InstantSearch>
  );
}

const IndexResults = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div>
        <h5>No results have been found for &quot;{searchState.query}&quot;</h5>
        <CustomClearRefinements />
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            place-content: center;
            height: 100%;
            width: 100%;
            color: var(--glow);
          }

          h5 {
            text-align: center;
            font-weight: 400;
            font-family: var(--monospace);
          }
        `}</style>
      </div>
    )
);
