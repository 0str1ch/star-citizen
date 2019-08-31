import React from "react";
import Logo from "./logo";
import ActiveLink from "./active-link";

export default function Header() {
  return (
    <header>
      <div className="logo-wrapper">
        <ActiveLink href="/">
          <Logo color="var(--white)" />
        </ActiveLink>
      </div>
      <p>Browse the Star Citizen™ ship matrix</p>
      <style jsx>
        {`
          header {
            display: flex;
            flex-direction: row;
            margin: 0;
            width: 100%;
            height: 2rem;
            padding: 0 var(--outer-padding);
            text-align: center;
            background: var(--dark-bg);
            place-items: center center;
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
            max-width: 4rem;
            width: 4rem;
          }
        `}
      </style>
    </header>
  );
}
