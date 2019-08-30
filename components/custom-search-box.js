import { connectSearchBox } from "react-instantsearch-dom";

function showStalled() {
  return "Searching is stalled...";
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
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
        form {
        }

        input {
        }

        button {
        }
      `}
    </style>
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
