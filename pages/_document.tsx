import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class MainDocument extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          {/* <Script src="/noflash.js" /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
