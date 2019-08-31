import Head from "next/head";
import Theme from "./theme";
import Header from "./header";

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title || "Star Citizen Ship Database by NaughtyOstrich"}</title>
        <meta
          name="description"
          content={
            description ||
            "Search infinitely through the vast Star Citizen ship matrix using a project created by Jeremy Smith AKA NaughtyOstrich"
          }
        />
      </Head>
      <Theme />
      {/* <Gridlines /> */}
      <Header />
      <main className="layout-wrapper">
        {children}

        <style jsx global>
          {`
            .layout-wrapper {
              align-items: stretch;
              display: flex;
              flex-direction: column;
              width: 100%;
              overflow-scrolling: touch;
              -webkit-overflow-scrolling: touch;
              margin: 0;
            }

            @media screen and (min-width: 60em) {
              .layout-wrapper {
                display: flex;
                flex-direction: column;
              }
            }

            // CSS only media query for mobile
            @media screen and (max-width: 640px) {
              .layout-wrapper {
                margin: 0;
              }
            }

            html {
              text-size-adjust: 100%;
              -webkit-text-size-adjust: none;
              -webkit-font-smoothing: subpixel-antialiased;
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
              box-sizing: border-box;
              width: 100%;
              -ms-overflow-style: -ms-autohiding-scrollbar;
            }

            html {
              font-size: 16px;
            }
            @media screen and (min-width: 320px) {
              html {
                font-size: calc(18px + 8 * ((100vw - 320px) / 960));
              }
            }
            @media screen and (min-width: 1280px) {
              html {
                font-size: 20px;
              }
            }

            /** Moved from Meta.js */
            body {
              background-color: var(--site-bg);
              position: relative;
              width: 100%;
              min-height: 100%;
              margin: 0;
              line-height: 1.6;
              font-family: var(--font);
              font-weight: 400;
              direction: ltr;
              overflow-x: hidden;
              font-feature-settings: "ss02", "ss03", "ss06";
              font-variant-ligatures: common-ligatures;
              text-rendering: optimizeLegibility;
              /* overflow-x: hidden; */
              /*scroll-behavior: smooth;*/
            }

            /*
* === Resets & Fixes ===
*/

            *,
            *::before,
            *::after {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              -webkit-font-kerning: auto;
              font-kerning: auto;
              word-wrap: break-word;
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
            }

            * {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }

            :after,
            :before {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }

            ::-moz-selection {
              background: var(--primary-hue);
              color: var(--light-text);
            }

            ::selection {
              background: var(--primary-hue);
              color: var(--light-text);
            }

            a {
              text-decoration: none;
            }

            pre code {
              margin: 0;
            }

            p {
              margin-left: 0;
              margin-right: 0;
              margin-top: 0;
              padding: 0;
              border: 0;
              vertical-align: baseline;
            }

            ol,
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }

            * + address,
            * + dl,
            * + fieldset,
            * + figure,
            * + pre {
              margin-top: 0;
            }

            img {
              max-width: 100%;
              display: block;
              height: auto;
            }

            img {
              vertical-align: middle;
              border-style: none;
            }

            svg:not(:root) {
              /*overflow: hidden;*/
            }

            svg {
              vertical-align: middle;
            }

            svg {
              shape-rendering: crispEdges;
            }

            svg path,
            svg circle {
              shape-rendering: geometricprecision;
            }

            video {
              height: auto;
              width: 100%;
            }

            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            main,
            nav,
            section,
            summary {
              display: block;
            }

            .button,
            button {
              border: 0;
              outline: 0;
              padding: 0;
              margin: 0;
              font-size: inherit;
              appearance: none;
              -webkit-appearance: none;
              background: transparent;
            }

            .js-focus-visible :focus:not([data-focus-visible-added]) {
              outline: none;
            }

            div.js-focus-visible :focus:not(.focus-visible) {
              outline: none;
            }

            button.js-focus-visible :focus:not([data-focus-visible-added]) {
              outline: none;
            }
            /** Typography Sizes**/
            :root {
              --h1: 4.209rem;
              --h2: 3.157em;
              --h3: 2.369em;
              --h4: 1.777em;
              --text-large: 1.333em;
              --text-normal: 1rem;
              --text-small: 0.75em;
              --text-xsmall: 0.75em;
            }

            p {
              margin-bottom: 1.25rem;
              font-size: 1rem;
            }

            h1,
            h2,
            h3,
            h4 {
              font-family: inherit;
              margin: 2.75rem 0 1rem;
              line-height: 1.15;
              letter-spacing: 0;
            }

            h1 {
              margin-top: 0;
              font-size: var(--h1);
              font-weight: inherit;
              font-family: var(--header-font);
            }

            h2 {
              font-size: var(--h2);
              font-weight: bold;
              color: currentColor;
            }

            h3 {
              font-size: var(--h3);
              font-weight: bold;
              color: currentColor;
            }

            h4 {
              font-size: var(--h4);
              color: currentColor;
              font-weight: normal;
            }

            small,
            .font_small {
              font-size: var(--text-small);
            }

            strong {
              font-weight: bold;
            }

            em {
              font-style: italic;
            }

            a {
              text-decoration: none;
              color: currentColor;
            }

            h1:last-child,
            h1:only-child,
            h2:last-child,
            h2:only-child,
            h4:last-child,
            h4:only-child,
            h6:last-child,
            h6:only-child,
            p:last-child,
            p:only-child {
              margin-bottom: 0;
            }

            blockquote {
              display: block;
              padding: 1.25em 0;
              margin-bottom: 1.5em;
            }

            blockquote,
            q {
              quotes: none;
            }

            blockquote:after,
            blockquote:before,
            q:after,
            q:before {
              content: "";
              content: none;
            }

            blockquote.left-pull {
              margin-left: -40%;
            }

            @media only screen and (max-width: 36em) {
              blockquote.left-pull {
                margin-left: 0;
              }
            }

            blockquote.right-pull {
              width: 130%;
              margin-left: 15%;
            }

            @media only screen and (max-width: 36em) {
              blockquote.right-pull {
                width: 100%;
                margin-left: 0;
              }
            }

            blockquote .video {
              margin-bottom: 1.5em;
            }

            blockquote p {
              font-size: var(--h3);
              color: var(--primary);
              line-height: 1.2;
            }

            blockquote p:first-of-type:before {
              content: "";
            }

            blockquote p:last-of-type:after {
              content: "";
            }

            blockquote span {
              display: block;
              text-align: right;
            }

            .quote-position,
            .quote-source {
              color: #000;
              opacity: 0.5;
            }

            .quote-source {
              font-family: NeueHaasBold, Helvetica, sans-serif;
              font-size: 1.5em;
              padding-bottom: 0.25em;
              margin-top: -1em;
            }

            .quote-source:before {
              content: "";
            }

            .quote-position {
              font-family: AndaleMono, monospace;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              margin-right: -0.15em;
              font-size: 0.75em;
              font-weight: 700;
            }

            .quote-position + .quote-position {
              margin-top: 0.5em;
            }

            .col-2 {
              display: grid;
              grid-gap: 2rem;
              grid-template-columns: 1fr 1fr;
            }

            /** Forms */

            .form-group {
              position: relative;
            }

            input:placeholder-shown + label {
              opacity: 0;
              transform: translateY(1rem);
            }

            input:focus:not([type]),
            input:focus[type="color"],
            input:focus[type="date"],
            input:focus[type="datetime-local"],
            input:focus[type="datetime"],
            input:focus[type="email"],
            input:focus[type="month"],
            input:focus[type="number"],
            input:focus[type="password"],
            input:focus[type="search"],
            input:focus[type="tel"],
            input:focus[type="text"],
            input:focus[type="time"],
            input:focus[type="url"],
            input:focus[type="week"],
            select:focus,
            textarea:focus {
              border-color: var(--hue-1);
              background: #fff;
              box-shadow: 0 0 2px var(--glow);
              color: var(--primary-text);
              z-index: 1;
              outline: none;
            }

            input:not([type]),
            input[type="color"],
            input[type="date"],
            input[type="datetime-local"],
            input[type="datetime"],
            input[type="email"],
            input[type="month"],
            input[type="number"],
            input[type="password"],
            input[type="search"],
            input[type="tel"],
            input[type="text"],
            input[type="time"],
            input[type="url"],
            input[type="week"],
            select,
            textarea {
              height: 3em;
              max-width: 100%;
              padding: 0 1em;
              border: 1px solid var(--hint);
              background: #fff;
              color: var(--primary-hue);
              transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
              border-radius: var(--border-radius);
              width: 100%;
              position: relative;
            }

            input:not([type]),
            input[type="datetime"],
            input[type="email"],
            input[type="number"],
            input[type="password"],
            input[type="range"],
            input[type="search"],
            input[type="tel"],
            input[type="text"],
            input[type="url"] {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }

            input[type="checkbox" i] {
              background-color: transparent;
            }

            input,
            select,
            textarea {
              margin: 0;
              border-radius: var(--border-radius);
              font: inherit;
              color: inherit;
              box-sizing: border-box;
            }

             {
              /* Custom Scroll bars */
            }
            ::-webkit-scrollbar {
              width: 6px;
              height: 5px;
            }

            ::-webkit-scrollbar-button {
              width: 0;
              height: 0;
            }

            ::-webkit-scrollbar-thumb {
              background: #929599;
              border: none;
              border-radius: 50px;
            }

            ::-webkit-scrollbar-track {
              background: #ebecf0;
              border: none;
              border-radius: 0;
            }

            ::-webkit-scrollbar-corner {
              background: transparent;
            }
            ::-webkit-scrollbar-thumb {
              background: #25c3ff;
              border: none;
            }

            ::-webkit-scrollbar-track {
              background: #405171;
              border: none;
            }
          `}
        </style>
      </main>
      <footer />
    </>
  );
}

export default Layout;
