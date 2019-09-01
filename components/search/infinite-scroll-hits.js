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
            <Highlight
              tagName="mark"
              attribute="focus"
              hit={hit}
              className="ship-role"
            />
            <div className="ship-info">
              <h3>
                <Highlight
                  tagName="mark"
                  attribute="name"
                  hit={hit}
                  className="ship-name"
                />
              </h3>
              <h4>
                <Highlight
                  tagName="mark"
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
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: var(--outer-padding);
            max-width: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
          }

          img {
            object-fit: cover;
            width: auto;
            height: 20rem;
          }

          .ship-info {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4rem;
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
            height: 4rem;
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

          h3 {
            font-size: var(--text-large);
            text-shadow: var(--text-glow);
          }

          h4 {
            font-size: var(--text-small);
          }

          li {
            position: relative;
            display: flex;
            flex-direction: column;
            border: 1px solid var(--highlight-hue);
            border-radius: var(--border-radius);
            overflow: hidden;
            background: var(--dark-bg);
            color: var(--highlight-hue);
            box-shadow: var(--box-shadow-blue);
            cursor: pointer;
            min-height: 10rem;
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
          height: 1.333rem;
          line-height: 1.333rem;
          border: 1px solid var(--highlight-hue);
          border-radius: var(--border-radius);
          background: var(--dark-grey);
          overflow: hidden;
          font-size: var(--text-xsmall);
          padding: 0 0.5rem;
          margin: var(--inner-padding);
          opacity: 0.5;
          transition: opacity ease-in 0.1s;
          cursor: default;
          box-shadow: var(--box-shadow-blue);
        }

        li:hover span.ship-role {
          opacity: 1;
        }

        mark {
          background-color: transparent;
          color: var(--glow);
          text-shadow: var(--text-glow-highlight);
        }
      `}</style>
    </div>
  );
}

export default connectInfiniteHits(InfiniteHits);
