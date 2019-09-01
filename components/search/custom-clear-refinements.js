import { connectCurrentRefinements } from "react-instantsearch-dom";
import UIButton from "../ui-button";

const ClearRefinements = ({ items, refine }) => (
  <UIButton
    onClick={() => refine(items)}
    disabled={!items.length}
    type="submit"
  >
    Clear All Refinements
  </UIButton>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

export default CustomClearRefinements;
