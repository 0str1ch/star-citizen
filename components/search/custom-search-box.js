import { connectSearchBox } from "react-instantsearch-dom";

function showStalled() {
  return "Search is booting up...";
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <div className="search-wrapper">
    <form noValidate action="" role="search" className="searchbox">
      <input
        type="search"
        placeholder={
          isSearchStalled ? showStalled() : "Type to start searching..."
        }
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

      <style jsx global>
        {`
          div.search-wrapper {
            font-size: var(--text-small);
            z-index: 20;
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
