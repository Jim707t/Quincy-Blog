import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { sortPost } from '../utils/sortPost'
import Safu from '../components/safu/Safu'

interface BlogProps {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
    }
  }[];
}

export async function getStaticProps() {
  // Read the contents of the 'content' directory
  const files = fs.readdirSync(path.join('content'))

  // Read slug and frontmatter from the 'content' directory
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "")
    const  markdownWithMeta = fs.readFileSync(path.join("content", filename), 'utf-8')
    
    // Read the gray matter
    const {data: frontmatter} = matter(markdownWithMeta);

    return{
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortPost)
    },
  }
}

export default function Blog({posts}: BlogProps) {
  const siteTitle = 'Jim Quincy\'s Blog'
  const siteDescription = 'Welcome to my blog where I write about my passion for programming and technology, especially the technology of decentralisation and algorithms that learn.'

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jimquincy.tech/blog" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:site" content="@jimquincy" />
        <meta name="twitter:creator" content="@jimquincy" />
      </Head>
      <main>
        <Safu posts={posts} index={0} />
      </main>
    </Layout>
  )
}