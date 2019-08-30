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
import InfiniteHits from "./infinite-scroll-hits";
import CustomSearchBox from "./custom-search-box";

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
    >
      <Configure hitsPerPage={5} />
      <div>
        <CustomSearchBox autoFocus />
      </div>
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

              menu {
                margin: 0;
                padding: 0;
                list-style: none;
              }
            `}
          </style>
        </menu>
        <div>
          <InfiniteHits />
        </div>
      </content>
      <footer>
        <PoweredBy />
      </footer>
    </InstantSearch>
  );
}
