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
    <div className="search-results">
      <ul className="ais-InfiniteHits-list">
        {hits.map(hit => (
          <li key={hit.objectID}>
            <img src={hit.media} alt={hit.name} />
            <h3>
              <Highlight attribute="name" hit={hit} className="ship-name" />
            </h3>
            <h4>
              <Highlight
                attribute="manufacturer"
                hit={hit}
                className="ship-manufacturer"
              />
            </h4>
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
          div.search-results {
            padding: var(--outer-padding);
          }
          ul {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
          }

          h3,
          h4 {
            margin: 0;
          }

          li {
            display: flex;
            flex-direction: column;
            margin: 2rem 0;
            border: 1px solid var(--highlight-hue);
            border-radius: var(--border-radius);
            overflow: hidden;
            background: var(--dark-bg);
            color: var(--highlight-hue);
            box-shadow: var(--box-shadow);
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
