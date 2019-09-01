import React, { useState } from "react";

const Accordion = ({ title, children, onToggle }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="manufacturer-sort filter">
      <div
        className="filter-heading"
        onClick={() => {
          setVisibility(!visibility);
          if (onToggle) onToggle(!visibility);
        }}
        role="button"
      >
        <h5 className="title">
          {title}{" "}
          <svg viewBox="0 0 8 13" className="filter-svg">
            <path
              d="M.505.495L7.52 6.508.505 12.52z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </h5>
      </div>
      {visibility ? <div className="menu-panel">{children}</div> : null}
      <style jsx>
        {`
          .filter-heading {
            display: flex;
            margin-top: 10px;
            padding: 5px 0;
            justify-content: flex-end;
            align-items: flex-end;
            cursor: pointer;
            overflow-x: hidden;
            margin-top: 1rem;
          }

          .filter-heading:before {
            box-sizing: border-box;
            height: 11px;
            border-top: 1px solid var(--highlight-hue);
            border-right: 2px solid var(--highlight-hue);
            content: "";
            transform: skew(45deg) translateX(-4px);
            flex: 1 1 auto;
          }

          .filter-heading h5 {
            display: flex;
            font-weight: 400;
            text-shadow: var(--text-glow);
            padding-right: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            border-bottom: 1px solid var(--highlight-hue);
            color: inherit;
            text-decoration: none;
            text-transform: uppercase;
            font-size: var(--text-xsmall);
            line-height: 0.6rem;
            margin: 0;
          }

          .filter-svg {
            margin-left: 5px;
            width: 5px;
            height: 9px;
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default Accordion;
