import React from 'react';
import { AppProps } from 'next/app';
import { TrackingProvider } from '../lib/contexts/ga';
import { DefaultSeo } from 'next-seo';
import 'styles/index.css';
import 'fontsource-montserrat';
import meta from 'config/data/meta.json';
import { MantineProvider } from '@mantine/core';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s - ${meta.name}`}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: meta.productionUrl,
          title: meta.title,
          description: meta.description,
        }}
        twitter={{
          handle: `${meta.social.twitterHandle}`,
          site: `${meta.social.twitter}`,
          cardType: 'summary_large_image',
        }}
      />

      <TrackingProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
          <Component {...pageProps} />
        </MantineProvider>
      </TrackingProvider>
    </>
  );
};

export default App;
