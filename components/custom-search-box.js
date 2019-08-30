import { connectSearchBox } from "react-instantsearch-dom";

function showStalled() {
  return "Searching is stalled...";
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <div className="search-wrapper">
    <form noValidate action="" role="search">
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      <button onClick={() => refine("")} type="submit">
        Reset search
      </button>
      {isSearchStalled ? showStalled() : ""}
      <style jsx>
        {`
          div.search-wrapper {
            position: sticky;
            top: 0;
          }
          form {
          }

          input {
          }

          button {
          }
        `}
      </style>
    </form>
  </div>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
