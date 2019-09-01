import React from "react";

function Logo() {
  return (
    <span>
      SC.Matrix
      <style jsx>{`
         {
          font-family: var(--header-font);
          text-shadow: var(--text-glow);
          font-weight: 700;
          padding-right: 0.5rem;
          padding-bottom: 0.5rem;
          padding-left: 0.5rem;
          border-bottom: 1px solid var(--highlight-hue);
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 10px;
          font-size: var(--text-normal);
        }
      `}</style>
    </span>
  );
}

export default Logo;
