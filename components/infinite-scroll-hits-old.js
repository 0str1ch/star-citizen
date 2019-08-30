import React, { Component } from "react";
import { connectInfiniteHits, Highlight } from "react-instantsearch-dom";

class InfiniteHits extends Component {
  sentinel = null;

  componentDidMount() {
    this.observer = new IntersectionObserver(this.onSentinelIntersection);

    this.observer.observe(this.sentinel);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  onSentinelIntersection = entries => {
    const { hasMore, refine } = this.props;

    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore) {
        refine();
      }
    });
  };

  render() {
    const { hits } = this.props;

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
            ref={c => (this.sentinel = c)}
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
}

export default connectInfiniteHits(InfiniteHits);
