import App from "next/app";
import React from "react";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  componentDidMount() {
    window.addEventListener("beforeinstallprompt", event => {
      event.userChoice.then(choiceResult => {
        console.log(choiceResult.outcome);

        if (choiceResult.outcome === "dismissed") {
          console.log("User cancelled home screen install");
        } else {
          console.log("User added to home screen");
        }
      });
    });
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return <Component {...pageProps} key={router.pathname} />;
  }
}
