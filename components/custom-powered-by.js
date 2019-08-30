import { connectPoweredBy } from "react-instantsearch-dom";

const PoweredBy = ({ url }) => <a href={url}>Link to Algolia</a>;

const CustomPoweredBy = connectPoweredBy(PoweredBy);

export default CustomPoweredBy;
