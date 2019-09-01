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
    >
      {children}
      <style jsx>
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
          }

          .ui-button:hover {
            box-shadow: var(--box-shadow-glow);
            border: 1px solid var(--glow);
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
            }

            .ui-button:hover {
              box-shadow: var(--box-shadow-glow);
              border: 1px solid var(--glow);
            }
          `}
        </style>
      </a>
    </Link>
  );
}

export default UIButton;
