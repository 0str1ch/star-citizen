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
            cursor: pointer;
            position: relative;
            background: var(--primary-hue);
            color: var(--highlight-hue);
            border: 1px solid currentColor;
            border-radius: var(--border-radius);
            height: 1.5rem;
            line-height: 1.5rem;
            padding: 0 0.5rem;
            font-size: var(--text-small);
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
            a {
              cursor: pointer;
              position: relative;
            }
          `}
        </style>
      </a>
    </Link>
  );
}

export default UIButton;
