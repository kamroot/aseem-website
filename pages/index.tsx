import React from 'react';
import SEO from 'lib/components/content/seo';
import { Layout } from 'lib/components/layouts/classic';
import { H1, H2, H3 } from 'lib/components/primitives/headers';
import meta from 'config/data/meta.json';
import Link from 'next/link';
import { AppShell, Footer, Header } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { GetStaticPropsContext } from 'next/types';
import { getBlogList } from 'lib/data/mdx';

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string[] }>) => {
  const essays = [];
  const mdxfunction = await getBlogList('config/content/essays');
  const mdxfiles = await mdxfunction();
  mdxfiles.map(async (f) => essays.push(await f.data));

  return {
    props: { essays },
  };
};

const EssayCard = ({ essay }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={essay.image} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{essay.title}</Text>
        <Badge color="blue" variant="light">
          {essay.keywords}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {essay.description}
      </Text>

      <Link href="essays/why-nobody-is-happy-with-your-roadmap" passHref>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Read
        </Button>
      </Link>
    </Card>
  );
};

export const HomePage = ({ essays }) => {
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

      <AppShell
        styles={{
          main: {
            background: '#FFFFFF',
            width: '100vw',
            height: '100vh',
            paddingLeft: '0px',
          },
        }}
        header={
          <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Text size="lg" weight="bolder">
                Aseem&nbsp;
              </Text>
              <article className="prose lg:prose-xl">Asthana&apos;s Website</article>
            </div>
          </Header>
        }
        footer={
          <Footer height={60} p="md">
            <Link passHref href="/sitemap-0.xml">
              <a>Sitemap</a>
            </Link>
          </Footer>
        }
      >
        <Layout showNav={false}>
          <div className="prose-md prose">
            <H1> Essays</H1>
            {essays.map((essay) => (
              <div className="pt-6" key={essay.title}>
                <EssayCard essay={essay} />
              </div>
            ))}
          </div>
        </Layout>
      </AppShell>
    </>
  );
};

export default HomePage;
