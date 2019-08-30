import { connectInfiniteHits } from "react-instantsearch-dom";

const InfiniteHits = ({
  hits,
  hasPrevious,
  refinePrevious,
  hasMore,
  refineNext
}) => (
  <div>
    <button disabled={!hasPrevious} onClick={refinePrevious} type="button">
      Show previous
    </button>
    <ol>
      {hits.map(hit => (
        <li key={hit.objectID}>
          <img src={hit.media} alt={hit.name} />
          <span className="ship-name">{hit.name}</span>
          <span className="ship-manufacturer">{hit.manufacturer}</span>
          <span className="ship-role">{hit.focus}</span>
        </li>
      ))}
    </ol>
    <button disabled={!hasMore} onClick={refineNext} type="button">
      Show more
    </button>
    <style jsx>
      {`
        ol {
          display: flex;
          flex-direction: column;
          max-width: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

export default CustomInfiniteHits;
