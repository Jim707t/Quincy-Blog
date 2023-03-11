import * as React from 'react';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Layout from '../../components/Layout';
import Head from 'next/head';
import {
  Box,
  Container,
  Heading,
  Divider,
} from '@chakra-ui/react';

type Frontmatter = {
  title: string;
  date: string;
  subtitle: string;
  image: string;
  keywords: string[];
};

type Props = {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
};

export async function getStaticPaths() {
  const files = readdirSync(join('content'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = readFileSync(join('content', `${slug}.md`), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default function Post({ frontmatter, slug, content }: Props) {
  const { title, date, subtitle, image, keywords } = frontmatter;
  const renderedContent = React.useMemo(() => {
    return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />;
  }, [content]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="keywords" content={keywords.join(',')} />
        <meta name="author" content="Jim Quincy" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://jimquincy.tech/${slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Container pt={40} pb={20} maxW={'4xl'}>
        <Heading as="h1" size="xl" px={{ base: 4, md: 4 }}>
          {title}
        </Heading>
        <Divider marginTop="5" mb={30} />
        {renderedContent}
      </Container>
    </Layout>
  );
}
