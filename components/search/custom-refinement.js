import { Highlight, connectRefinementList } from "react-instantsearch-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const RefinementList = ({ items, isFromSearch, refine, createURL }) => (
  <motion.ul variants={variants2}>
    {items.map(item => (
      <motion.li
        key={item.label}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href={createURL(item.value)}
          style={{ fontWeight: item.isRefined ? "bold" : "" }}
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {isFromSearch ? (
            <Highlight attribute="label" hit={item} />
          ) : (
            item.label
          )}{" "}
          ({item.count})
        </a>
      </motion.li>
    ))}
    <style jsx global>
      {`
        .ais-RefinementList-list,
        .ais-InfiniteHits-list,
        .ais-Pagination-list {
          list-style: none;
        }

        li.ais-RefinementList-item {
          height: 2rem;
          border: 1px solid var(--highlight-hue);
          border-radius: var(--border-radius);
          background: var(--dark-grey);
          display: flex;
          place-content: flex-start;
          padding: 0 0.5rem;
          width: 100%;
          margin-top: 1rem;
          color: var(--highlight-hue);
          box-shadow: var(--box-shadow-blue);
          transition: all 0.1s ease-in-out;
        }

        li.ais-RefinementList-item--selected,
        li.ais-RefinementList-item:hover {
          color: var(--glow);
          border: 1px solid var(--glow);
          box-shadow: var(--box-shadow-glow);
        }

        li.ais-RefinementList-item--selected {
          font-weight: 700;
        }

        .ais-RefinementList-label {
          width: 100%;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
          display: flex;
          place-content: space-between;
          place-items: center;
        }

        .ais-RefinementList-labelText {
          font-size: var(--text-xsmall);
          text-transform: uppercase;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: 0.05rem;
        }

        .ais-RefinementList-count {
          font-size: 50%;
          width: 1rem;
          height: 2rem;
          vertical-align: middle;
          line-height: 2rem;
          color: var(--glow);
        }
      `}
    </style>
  </motion.ul>
);

const CustomRefinement = connectRefinementList(RefinementList);

export default CustomRefinement;
