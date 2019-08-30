import React from "react";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <Logo color="#ededed" />
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
