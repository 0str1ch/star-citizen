export default () => (
  <>
    <style jsx global>
      {`
        :root {
          --site-bg-dark: #151515;
          --site-bg-light: #ffffff;
          --site-bg-dim: #fffef7;
          --primary-text-light: #fff;
          --secondary-text-light: #fff;
          --primary-text-dark: #000;
          --secondary-text-dark: rgba(0, 0, 0, 0.67);

          --primary-light: rgba(255, 255, 255, 1);
          --secondary: rgba(46, 62, 72, 0.6);
          --secondary-light: rgba(255, 255, 255, 0.7);
          --hint: rgba(46, 62, 72, 0.35);
          --hint-light: rgba(255, 255, 255, 0.35);
          --error: #ff5b0f;
          --shadow: rgba(235, 237, 242, 0.9);

          /** New color scheme **/
          --light-bg: linear-gradient(to right, #f5f5fa, #fff, #f5f5fa);
          --primary-hue: #731dd8;
          --primary-hue-light: #9d72de;
          --grey-bg: #f5f5f5;
          --off-white: #fcfaf9;
          --white: #fff;
          --hue-1: #4cb944;
          --hue-3: #ffe74c;
          --hue-2: #be8dd9;
          --hue-4: #31762c;
          --hue-5: #cceaff;
          --opaque: rgba(255, 255, 255, 0.87);

          /** Gradients */
          --green-gradient: linear-gradient(var(--hue-1), var(--hue-4))
            no-repeat;
          --light-gradient: linear-gradient(#fff, #e4e4e9) no-repeat;
          --primary-shadow: 0 7px 13px -3px rgba(30, 60, 37, 0.3),
            0 2px 4px 0 rgba(30, 60, 37, 0.4), inset 0 -2px 0 0 #245621;
          --secondary-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
            0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
          --primary-shadow-hover: 0 11px 16px -3px rgba(30, 60, 37, 0.3),
            0 4px 5px 0 rgba(30, 60, 37, 0.4), inset 0 -2px 0 0 #245621;
          --secondary-shadow-hover: 0 11px 16px -3px rgba(45, 35, 66, 0.3),
            0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
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
    <style jsx global>
      {``}
    </style>
  </>
);
