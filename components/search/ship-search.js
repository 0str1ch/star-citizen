import React from "react";
import { orderBy } from "lodash";
import algoliasearch from "algoliasearch/lite";
import {
  RefinementList,
  ScrollTo,
  SearchBox,
  Hits,
  HitsPerPage,
  Configure,
  Highlight,
  Pagination,
  ToggleRefinement,
  CurrentRefinements,
  ClearRefinements,
  Stats,
  PoweredBy
} from "react-instantsearch-dom";
import { InstantSearch } from "./instantsearch";
import InfiniteHits from "./infinite-scroll-hits";
import CustomSearchBox from "./custom-search-box";
import UIButton from "../ui-button";
import CustomClearRefinements from "./custom-clear-refinements";
import CustomAutocomplete from "./custom-autocomplete";

const searchClient = algoliasearch(
  "LBEZ4EW674",
  "a75591ffd502c0f33a9ba1735b496208"
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
      stalledSearchDelay={500}
    >
      <section id="application">
        <menu>
          <Configure hitsPerPage={5} />
          <CustomSearchBox />
          <Stats />
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
          <CurrentRefinements clearsQuery />
          <CustomClearRefinements />
          <style jsx global>
            {`
              .ais-RefinementList-list,
              .ais-InfiniteHits-list,
              .ais-Pagination-list {
                list-style: none;
              }

              section#application {
                display: grid;
                grid-template-columns: minmax(18rem, 1fr) minmax(
                    calc(100% - 18rem),
                    1fr
                  );
                overflow: hidden;
                height: calc(100vh - 2rem);
              }

              menu {
                overflow-y: scroll;
                overflow-x: hidden;
                margin: 0;
                padding: 0;
                list-style: none;
                background: var(--dark-bg);
                padding: var(--inner-padding);
                color: var(--highlight-hue);
                width: 100%;
              }

              content {
                overflow-y: scroll;
                -webkit-overflow-scrolling: touch;
                background: var(--primary-hue);
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
              }

              li.ais-RefinementList-item--selected {
                color: var(--glow);
                font-weight: 700;
                border: 1px solid var(--glow);
                box-shadow: var(--box-shadow-glow);
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
                font-size: var(--text-small);
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
          <div>
            <InfiniteHits />
          </div>
          <PoweredBy />
        </content>
      </section>
    </InstantSearch>
  );
}
