import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Project from '../components/project/Project'
import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { sortPost } from '../utils/sortPost'

export async function getStaticProps() {
  // Read the contents of the 'content' directory
  const files = fs.readdirSync(path.join('project'))

  // Read slug and frontmatter from the 'content' directory
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "")
    const  markdownWithMeta = fs.readFileSync(path.join("project", filename), 'utf-8')
    
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


export default function project({posts, index}:{posts: any, index: number}) {
  return (
    <Layout>
    <Head>
        <title>Projects | jimquincy.tech</title>
        <meta name="description" content="Jim Quincy's Projects page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <main>
       <Project key={index} posts={posts} index={0} />
      </main>
    </Layout>
  )
}
