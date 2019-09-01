import { connectSearchBox } from "react-instantsearch-dom";
import UIButton from "../ui-button";
import CustomClearRefinements from "./custom-clear-refinements";

function showStalled() {
  return "Search is booting up...";
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <div className="search-wrapper">
    <form noValidate action="" role="search" className="searchbox menu-panel">
      <input
        type="search"
        placeholder={
          isSearchStalled ? showStalled() : "Type to start searching..."
        }
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      <div className="button-wrapper">
        <UIButton onClick={() => refine("")} type="submit">
          Reset Search
        </UIButton>
        <CustomClearRefinements />
      </div>

      <style jsx global>
        {`
          div.search-wrapper {
            font-size: var(--text-small);
            z-index: 20;
            background: var(--light-blue);
            border-bottom: 2px solid currentColor;
          }
          form.searchbox {
            display: flex;
            flex-wrap: wrap;
            place-content: flex-end;
          }

          div.button-wrapper {
            width: 100%;
            display: flex;
            place-content: space-between;
          }

          form.searchbox input {
            position: relative;
            background: var(--primary-hue);
            color: var(--highlight-hue);
            border: 1px solid currentColor;
            border-radius: var(--border-radius);
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            padding: 0 0.5rem;
            box-shadow: var(--box-shadow-blue);
          }

          form.searchbox input:focus {
            background: var(--primary-hue);
            color: var(--highlight-hue);
            border: 1px solid var(--glow);
            outline: none;
            box-shadow: var(--box-shadow-glow);
          }

          form.searchbox button {
          }
        `}
      </style>
    </form>
  </div>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
