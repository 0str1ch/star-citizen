import { connectCurrentRefinements } from "react-instantsearch-dom";
import UIButton from "../ui-button";

const ClearRefinements = ({ items, refine }) => (
  <div>
    <UIButton
      onClick={() => refine(items)}
      disabled={!items.length}
      type="submit"
    >
      Clear All Refinements
    </UIButton>
    <style jsx>
      {`
        div {
          display: flex;
          place-content: center center;
        }
      `}
    </style>
  </div>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

export default CustomClearRefinements;
