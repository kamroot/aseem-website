import React from 'react';
import SEO from '~/lib/components/content/seo';
import { Layout } from '~/lib/components/layouts/classic';
import { H1, H2, H3 } from '~/lib/components/primitives/headers';
import Hero from '~/lib/components/content/hero';
import { NavBar } from '~/lib/components/primitives/navbar';
import meta from 'facade/data/meta.json';



export const HomePage = () => {

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        url={'/'}
        image="/img/pages/home/dashboard.jpg"
        keywords={['aseem asthana']}
        dateUpdated="2022-05-20"
        datePublished={meta.datePublished}
        type="blog"
      />

      <NavBar />


      <Layout showNav={false}>
        <div className="prose-md prose">
          <H2> Website for Aseem Asthana</H2>
          <p>
           This is aseem's website
          </p>
        </div>
      </Layout>
    </>
  );

};

export default HomePage;
