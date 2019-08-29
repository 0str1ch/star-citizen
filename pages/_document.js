import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class JeremyDev extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="js." />
          <meta name="apple-mobile-web-app-title" content="js." />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#9d72de"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <link
            rel="preload"
            href="/static/fonts/MarvinVisionsGX-subset.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/NeueMontreal-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                      @font-face {
                        font-family: 'NeueMontreal';
                        font-display: swap;
                        src: url('/static/fonts/NeueMontreal-Regular.woff2')
                          format('woff2');
                        font-weight: normal;
                        font-style: normal;
                        unicode-range: U+000-5FF;
                      }
                      @font-face {
                        font-family: 'NeueMontreal';
                        font-display: swap;
                        src: url('/static/fonts/NeueMontreal-Bold.woff2') format('woff2');
                        font-weight: bold;
                        font-style: normal;
                        unicode-range: U+000-5FF;
                      }
          
                      @font-face {
                        font-family: 'MarvinVisions-Variable';
                        src: url('/static/fonts/MarvinVisionsGX-subset.woff2')
                          format('woff2-variations');
                        font-display: block;
                        unicode-range: U+000-5FF;
                        font-weight: 20 170;
                      }
          
          `
            }}
          />

          <link
            rel="manifest"
            href="/static/manifest.json"
            crossOrigin="use-credentials"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
