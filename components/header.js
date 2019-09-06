import React from "react";
import Logo from "./logo";
import ActiveLink from "./active-link";

export default function Header() {
  return (
    <header>
      <div className="logo-wrapper">
        <ActiveLink href="/">
          <Logo />
        </ActiveLink>
      </div>
      <p>Browse the Star Citizen™ ship matrix</p>
      <style jsx>
        {`
          header {
            display: flex;
            flex-direction: column;
            margin: 0;
            width: 100%;
            padding: var(--outer-padding) var(--inner-padding);
            text-align: center;
            background: var(--light-blue);
            place-items: center center;
            border-bottom: 2px solid var(--glow);
          }

          @media (min-width: 1200px) {
            header {
              display: flex;
              flex-direction: row;
              height: 2rem;
              padding: 0 var(--inner-padding);
            }
          }

          p {
            margin-left: 1rem;
            font-size: var(--text-small);
            color: var(--glow);
          }
        `}
      </style>
      <style jsx global>
        {`
          header div.logo-wrapper svg {
            display: block;
            max-width: 7rem;
            width: 7rem;
            margin-top: 0.15rem;
          }
        `}
      </style>
    </header>
  );
}
