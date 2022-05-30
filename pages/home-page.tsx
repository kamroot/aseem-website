import React from 'react';
import SEO from '~/lib/components/content/seo';
import { Layout } from '~/lib/components/layouts/classic';
import { H1, H2, H3 } from '~/lib/components/primitives/headers';
import { NavBar } from '~/lib/components/primitives/navbar';
import meta from '~/facade/data/meta.json';
import Link from 'next/link';
import { url } from '~/lib/functions/utils';

export const HomePage = () => {
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        url={'/'}
        image="/img/pages/home/dashboard.jpg"
        keywords={['aseem asthana']}
        dateUpdated="2022-05-30"
        datePublished={meta.datePublished}
        type="blog"
      />

      <NavBar />

      <Layout showNav={false}>
        <div className="prose-md prose">
          <H1> Essays by Aseem Asthana</H1>
          <Link href="essays/why-nobody-is-happy-with-your-roadmap">
            <a>
              <H2>Why nobody happy with your product roadmap?</H2>
            </a>
          </Link>
          Feature prioritization and updating roadmaps are two common bugbears for product managers – experienced and
          new alike! I talk to a lot of product managers and they always exclaim that the sales team does not understand
          the roadmap or that engineering is complaining that they don’t know what to build.
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
