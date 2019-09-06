import React, { useEffect } from "react";
import { connectInfiniteHits, Highlight } from "react-instantsearch-dom";
import { motion } from "framer-motion";

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
  }, [props, sentinel]);

  const { hits, hasMore } = props;

  return (
    <div className="search-results">
      <ul className="ais-InfiniteHits-list">
        {hits.map(hit => (
          <motion.li
            key={hit.objectID}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <a
              href={hit.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              key={hit.objectID}
            >
              <img src={hit.media} alt={hit.name} key={hit.objectID} />
              <span className="ship-role">{hit.focus}</span>
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
            </a>
          </motion.li>
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
            grid-template-columns: 1fr;
            grid-gap: var(--outer-padding);
            overflow: hidden;
            width: 100%;
            max-width: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
          }

          @media (min-width: 1200px) {
            ul {
              grid-template-columns: 1fr 1fr;
            }
          }

          img {
            object-fit: cover;
            width: auto;
            min-height: 20vw;
            height: 20vw;
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
            text-transform: uppercase;
          }

          h4 {
            font-size: var(--text-small);
          }

          a {
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

           {
            /* a:hover,
          a:focus {
            border: 1px solid var(--glow);
          } */
          }

          a:hover div.ship-info::before {
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
            margin: ${hasMore ? "0 0 15rem 0" : "0"};
          }

          @media (min-width: 1200px) {
            li.ais-InfiniteHits-sentinel {
              grid-column: span 2;
              margin: ${hasMore ? "0 0 20rem 0" : "0"};
            }
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
          cursor: default;
          box-shadow: var(--box-shadow-blue);
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
