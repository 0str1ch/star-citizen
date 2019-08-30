import React from "react";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <div className="logo-wrapper">
        <Logo color="var(--white)" />
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

          header div.logo-wrapper {
            max-width: 15rem;
            width: 15rem;
          }
          p {
            margin-top: 0.5rem;
            font-size: var(--text-small);
            color: var(--glow);
          }
        `}
      </style>
    </header>
  );
}
