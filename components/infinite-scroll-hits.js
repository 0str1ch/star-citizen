import React, { useEffect } from "react";
import { connectInfiniteHits, Highlight } from "react-instantsearch-dom";

function InfiniteHits(props) {
  let sentinel = null;

  useEffect(() => {
    const onSentinelIntersection = entries => {
      const { hasMore, refine } = props;

      entries.forEach(entry => {
        if (entry.isIntersecting && hasMore) {
          refine();
        }
      });
    };
    const observer = new IntersectionObserver(onSentinelIntersection);
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, []);

  const { hits } = props;

  return (
    <div className="ais-InfiniteHits">
      <ul className="ais-InfiniteHits-list">
        {hits.map(hit => (
          <li key={hit.objectID}>
            <img src={hit.media} alt={hit.name} />
            <Highlight attribute="name" hit={hit} className="ship-name" />
            <Highlight
              attribute="manufacturer"
              hit={hit}
              className="ship-manufacturer"
            />
            <Highlight attribute="focus" hit={hit} className="ship-role" />
          </li>
        ))}
        <li
          className="ais-InfiniteHits-sentinel"
          // eslint-disable-next-line no-return-assign
          ref={c => (sentinel = c)}
        />
      </ul>
      <style jsx>
        {`
          ul {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
          }

          li {
            display: flex;
            flex-direction: column;
          }

          .ship-name,
          .ship-manufacturer,
          .ship-role {
          }
        `}
      </style>
    </div>
  );
}

export default connectInfiniteHits(InfiniteHits);
