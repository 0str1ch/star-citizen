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
            flex-direction: column;
            margin: 0;
            padding: 2rem;
            text-align: center;
            background: var(--dark-bg);
            place-items: center center;
          }

          p {
            margin-top: 0.5rem;
            font-size: var(--text-small);
            color: var(--glow);
          }
        `}
      </style>
      <style jsx global>
        {`
          header div.logo-wrapper svg {
            max-width: 15rem;
            width: 15rem;
          }
        `}
      </style>
    </header>
  );
}
