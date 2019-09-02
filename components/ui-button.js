import React from "react";
import Link from "next/link";

function UIButton({ link, href, theme, onClick, type, disabled, children }) {
  return !link ? (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type || "button"}
      className="ui-button"
      onClick={onClick}
      disabled={disabled}
      tabIndex={0}
    >
      {children}
      <style jsx global>
        {`
          button.ui-button {
            width: 100%;
            max-width: 300px;
            cursor: pointer;
            position: relative;
            background: var(--primary-hue);
            color: var(--highlight-hue);
            border: 1px solid currentColor;
            border-radius: var(--border-radius);
            height: 2rem;
            line-height: 2rem;
            padding: 0 0.666rem;
            font-size: var(--text-small);
            margin: 0.5rem 0;
            box-shadow: var(--box-shadow-blue);
            transition: all 0.1s ease-in-out;
            white-space: nowrap;
            text-align: center;
          }

          button.ui-button:hover {
            box-shadow: var(--box-shadow-glow);
            border: 1px solid var(--glow);
          }
          button.ui-button:disabled {
            opacity: 0.5;
            cursor: default;
          }

          button.ui-button:disabled:hover {
            box-shadow: var(--box-shadow-blue);
            border: 1px solid var(--highlight-hue);
          }

          button.ui-button:focus {
            outline: 0;
            border: 1px solid var(--glow);
          }

          /** Temporary CSS location for Show More button until I make a custom RefinementList component */

          button.ais-RefinementList-showMore {
            display: flex;
            place-items: center;
            width: 100%;
            cursor: pointer;
            position: relative;
            color: var(--highlight-hue);
            height: 2rem;
            line-height: 2rem;
            font-size: var(--text-xsmall);
            white-space: nowrap;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            margin-top: 0.5rem;
            text-shadow: var(--text-glow);
          }

          button.ais-RefinementList-showMore::before {
            content: "";
            width: 100%;
            height: 1px;
            display: block;
            margin-right: 0.5rem;
            background: currentColor;
          }

          button.ais-RefinementList-showMore::after {
            content: "";
            width: 100%;
            height: 1px;
            display: block;
            margin-left: 0.5rem;
            background: currentColor;
          }

          button.ais-RefinementList-showMore:hover {
          }

          button.ais-RefinementList-showMore:focus {
            outline: 0;
          }
        `}
      </style>
    </button>
  ) : (
    <Link href={href}>
      <a className="nav-button">
        {children}

        <style jsx>
          {`
            a.ui-button {
              cursor: pointer;
              position: relative;
              background: var(--primary-hue);
              color: var(--highlight-hue);
              border: 1px solid currentColor;
              border-radius: var(--border-radius);
              height: 2rem;
              line-height: 2rem;
              padding: 0 0.666rem;
              font-size: var(--text-small);
              margin: 0.5rem 0;
              box-shadow: var(--box-shadow-blue);
              transition: all 0.1s ease-in-out;
              white-space: nowrap;
              text-align: center;
            }

            a.ui-button:hover {
              box-shadow: var(--box-shadow-glow);
              border: 1px solid var(--glow);
            }

            a.ui-button:disabled {
              opacity: 0.5;
              cursor: default;
            }

            a.ui-button:disabled:hover {
              box-shadow: var(--box-shadow-blue);
              border: 1px solid var(--highlight-hue);
            }

            a.ui-button:focus {
              outline: 0;
              border: 1px solid var(--glow);
            }
          `}
        </style>
      </a>
    </Link>
  );
}

export default UIButton;
