import { connectSearchBox } from "react-instantsearch-dom";

function showStalled() {
  return "Searching is stalled...";
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <div className="search-wrapper">
    <form noValidate action="" role="search" className="searchbox">
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      <button
        onClick={() => refine("")}
        type="submit"
        className="reset-button button"
      >
        Reset search
      </button>
      {isSearchStalled ? showStalled() : ""}
      <style jsx global>
        {`
          div.search-wrapper {
            position: sticky;
            top: 0;
            z-index: 20;
            background: var(--dark-bg);
            padding: var(--outer-padding);
          }
          form.searchbox {
          }

          form.searchbox input {
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
