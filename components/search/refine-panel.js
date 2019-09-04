import React from "react";
import { orderBy } from "lodash";
import { RefinementList } from "react-instantsearch-dom";
import Accordion from "../accordion";
import CustomRefinement from "./custom-refinement";

function RefinePanel() {
  return (
    <div>
      <Accordion title="Sort by Manufacturer">
        <RefinementList
          attribute="manufacturer"
          transformItems={items => orderBy(items, "label", "asc")}
          limit={5}
          tabIndex={0}
          showMore
        />
      </Accordion>
      <Accordion title="Sort by Production Status">
        <RefinementList
          attribute="production_status"
          transformItems={items => orderBy(items, "label", "asc")}
          limit={5}
          tabIndex={0}
        />
      </Accordion>
      <Accordion title="Sort by Role">
        <RefinementList
          attribute="focus"
          transformItems={items => orderBy(items, "label", "asc")}
          limit={5}
          tabIndex={0}
          showMore
        />
      </Accordion>
      <style jsx global>
        {`
          .ais-RefinementList-list,
          .ais-InfiniteHits-list,
          .ais-Pagination-list {
            list-style: none;
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
    </div>
  );
}

export default RefinePanel;
