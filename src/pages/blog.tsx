import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { sortPost } from '../utils/sortPost'
import Safu from '../components/safu/Safu'


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

export default function blog({posts, index}:{posts: any, index: number}) {
  return (
    <Layout>
    <Head>
        <title>Blog | jimquincy.tech</title>
        <meta name="description" content="Jim Quincy's blog post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
    <Safu key={index} posts={posts} index={0} />
    </main>
    </Layout>
  )
}
