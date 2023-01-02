import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from '../../components/Layout'
import Head from 'next/head'
import { Box, 
         Text, 
         Container, 
         Heading,
         Divider} from '@chakra-ui/react'


export async function getStaticPaths() {
    // Read the contents of the 'content' directory
    const files = fs.readdirSync(path.join('content'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))
    
    return {
        paths,
        fallback: false
    }

  }

  export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
    const  markdownWithMeta = fs.readFileSync(path.join("content", slug + '.md'), 'utf-8')
    // Read the gray matter
    const {data: frontmatter, content} = matter(markdownWithMeta);
  
    return {
      props: {
        frontmatter,
        slug,
        content
      }
    }
  }

export default function Post({frontmatter: {title, date, subtitle}, slug, content}: 
    {frontmatter: {title: string, date: string, subtitle: string}, slug: string, content: string} ){
  return (
    <Layout>
        <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Container pt={40} pb={20} maxW={'4xl'}>
        <Heading as="h1" size="xl" px={{base: 4, md: 4}}>
            {title}
       </Heading>
       <Divider marginTop="5" mb={30} />
        <Box 
        dangerouslySetInnerHTML={{__html: marked(content)}}>
     </Box>
      </Container>
    </Layout>
  )
}
