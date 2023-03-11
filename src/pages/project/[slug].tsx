import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from '../../components/Layout'
import Head from 'next/head'
import { 
  Box, 
  Text, 
  Container, 
  Divider, 
  Heading, 
  useColorModeValue,
} from '@chakra-ui/react'

interface Frontmatter {
  title: string;
  date: string;
  description: string;
  cover_image: string;
  keywords: string[];
}

interface Props {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('project'))
  const paths = files.map((fileName: string) => ({
    params: {
      slug: fileName.replace(".md", "")
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fileName = slug + '.md';
  const markdownWithMeta = fs.readFileSync(path.join('project', fileName), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}

export default function Post({ frontmatter: { title, date, description, cover_image, keywords }, slug, content }: Props) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords.join(',')} />
        <meta name="author" content="Jim Quincy" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta property="og:url" content={`https://jimquincy.tech/${slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={cover_image} />
      </Head>
      <Box
		   bg={useColorModeValue('gray.50', 'gray.700')}
		   color={useColorModeValue('gray.700', 'gray.200')}>
       <Container pt={40} pb={20} maxW={'4xl'}>
         <Heading as="h1" size="xl" px={{ base: 4, md: 4 }}>
          {title}
         </Heading>
         <Text fontSize="xl" color="gray.500" mb={2} px={{ base: 4, md: 4 }}>
          {date}
         </Text>
         <Divider marginTop="5" />
          <Box mx={0} display="flex" justifyContent="center" p={3}
            dangerouslySetInnerHTML={{ __html: marked(content) }}>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
