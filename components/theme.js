export default () => (
  <>
    <style jsx global>
      {`
        :root {
          /** New color scheme **/
          --primary-hue: rgb(28, 38, 54);
          --dark-bg: #0b101a;
          --medium-blue: #1c2838;
          --highlight-hue: rgb(139, 223, 255);
          --glow: #da9e00;
          --grey: rgb(43, 47, 49);
          --dark-grey: rgb(32, 36, 39);
          --light-bg: linear-gradient(to right, #f5f5fa, #fff, #f5f5fa);
          --white: #fff;
          --hint: #999;

          /** Gradients */
          --light-bg: linear-gradient(to right, #f5f5fa, #fff, #f5f5fa);
          --gradient: linear-gradient(var(--hue-1), var(--hue-4)) no-repeat;
          --light-gradient: linear-gradient(#fff, #e4e4e9) no-repeat;
          --card-shadow: 0 5px 15px 0 rgba(74, 40, 101, 0.15),
            0 2px 4px 0 rgba(149, 132, 162, 0.2);

          /** Utility Variables **/
          --section-margin: 5rem auto;
          --section-padding: 5rem 0;
          --outer-padding: 1.5rem;
          --inner-padding: 1rem;
          --border-radius: 5px;
          --border: 2px solid #222;
          --box-shadow: 0 5px 15px 0 rgba(74, 40, 101, 0.15),
            0 2px 4px 0 rgba(149, 132, 162, 0.2);

          /** Typography */
          --font: "NeueMontreal", Arial, "Helvetica Neue", Helvetica, sans-serif;
          --header-font: var(--font);
          --monospace: "IBM Plex Mono", Consolas, "Liberation Mono", Menlo,
            Courier, monospace;
        }

        body.dark-mode {
          color: var(--white);
          background-color: var(--site-bg-dark);
        }

        body.dark-mode #modal .overlay {
          color: var(--white);
          background-color: var(--site-bg-dark);
        }

        body.light-mode {
          color: var(--primary-text-dark);
          background-color: var(--site-bg-light);
        }

        body.light-mode #modal .overlay {
          color: var(--primary-text-dark);
          background-color: var(--site-bg-light);
        }
      `}
    </style>
  </>
);
