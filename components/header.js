import React from "react";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <Logo color="var(--primary-hue)" />
      <style jsx>
        {`
          header {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </header>
  );
}
