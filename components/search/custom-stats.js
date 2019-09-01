import { connectStats } from "react-instantsearch-dom";

const Stats = ({ processingTimeMS, nbHits }) => (
  <div className="stats-wrapper">
    <p>
      <span>//</span> Found {nbHits} results in {processingTimeMS}
      ms
    </p>
    <style jsx>
      {`
        div.stats-wrapper {
          width: 100%;
        }

         {
          font-family: monospace;
          font-size: var(--text-xsmall);
        }
      `}
    </style>
  </div>
);

const CustomStats = connectStats(Stats);

export default CustomStats;
