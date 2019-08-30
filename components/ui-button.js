import React from "react";
import Link from "next/link";

function UIButton({ link, href, theme, children }) {
  return !link ? (
    <button type="button">{children}</button>
  ) : (
    <Link href={href}>
      <a className="nav-button">
        {children}

        <style jsx>
          {`
            a {
              cursor: pointer;
              position: relative;
              

           
              
          `}
        </style>
      </a>
    </Link>
  );
}

export default UIButton;
