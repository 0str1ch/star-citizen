export default () => (
  <>
    <style jsx global>
      {`
        :root {
          /** New color scheme **/
          --primary-hue: rgb(28, 38, 54);
          --dark-bg: #0b101a;
          --light-blue: #213249;
          --medium-blue: #1c2838;
          --highlight-hue: #8bdfff;
          --glow: #da9e00;
          --grey: rgb(43, 47, 49);
          --dark-grey: rgb(32, 36, 39);
          --light-bg: linear-gradient(to right, #f5f5fa, #fff, #f5f5fa);
          --white: #fff;
          --hint: #999;

          /** Gradients */
          --light-bg: linear-gradient(to right, #f5f5fa, #fff, #f5f5fa);
          --gradient: linear-gradient(var(--primary-hue), var(--medium-blue))
            no-repeat;
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

          --box-shadow-blue: 0px 0px 3px 0px rgba(139, 223, 255, 0.8),
            1px 1px 20px -8px rgba(139, 223, 255, 0.23);
          --box-shadow-glow: 0px 0px 3px 0px rgba(218, 158, 0, 0.8),
            1px 1px 20px -8px rgba(218, 158, 0, 0.7);
          --text-glow: 0 0 4px rgba(139, 223, 255, 0.7);
          --text-glow-highlight: 0 0 4px rgba(218, 158, 0, 0.8);

          /** Typography */
          --header-font: "Orbitron", Arial, "Helvetica Neue", Helvetica,
            sans-serif;
          --font: Arial, "Helvetica Neue", Helvetica, sans-serif;
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
