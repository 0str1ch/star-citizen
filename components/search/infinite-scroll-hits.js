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
            line-height: 1;
          }

          h4 {
            font-size: var(--text-large);
          }

          li {
            display: flex;
            flex-direction: column;
            margin-bottom: var(--outer-padding);
            border: 1px solid var(--highlight-hue);
            border-radius: var(--border-radius);
            overflow: hidden;
            background: var(--dark-bg);
            color: var(--highlight-hue);
            box-shadow: var(--box-shadow);
          }

          li:nth-last-child(2) {
            margin-bottom: 0;
          }

          li.ais-InfiniteHits-sentinel {
            border: none;
            background: transparent;
            color: transparent;
            box-shadow: none;
            margin: 0;
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
