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
            <Highlight attribute="focus" hit={hit} className="ship-role" />
            <div className="ship-info">
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
            </div>
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

          .ship-info {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 7rem;
            display: flex;
            flex-direction: column;
            place-items: start;
            place-content: center;
            padding: 0 var(--inner-padding);
          }

          .ship-info::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(
                45deg,
                rgba(28, 38, 54, 1),
                rgba(28, 40, 56, 0)
              )
              no-repeat;
            height: 7rem;
            opacity: 0.8;
            z-index: 0;
            transition: opacity ease-in 0.1s;
          }

          h3,
          h4 {
            margin: 0;
            line-height: 1;
            font-family: var(--header-font);
            z-index: 1;
          }

          h4 {
            font-size: var(--text-large);
          }

          li {
            position: relative;
            display: flex;
            flex-direction: column;
            margin-bottom: var(--outer-padding);
            border: 1px solid var(--highlight-hue);
            border-radius: var(--border-radius);
            overflow: hidden;
            background: var(--dark-bg);
            color: var(--highlight-hue);
            box-shadow: var(--box-shadow);
            cursor: pointer;
            min-height: 15rem;
          }

          li:hover div.ship-info::before {
            opacity: 1;
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
        `}
      </style>
      <style jsx global>{`
        span.ship-role {
          position: absolute;
          top: 0;
          right: 0;
          height: 2rem;
          line-height: 2rem;
          border: 1px solid var(--highlight-hue);
          border-radius: var(--border-radius);
          background: var(--dark-grey);
          overflow: hidden;
          font-size: var(--text-small);
          padding: 0 0.5rem;
          margin: var(--inner-padding);
          opacity: 0.5;
          transition: opacity ease-in 0.1s;
          cursor: default;
        }

        li:hover span.ship-role {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default connectInfiniteHits(InfiniteHits);
