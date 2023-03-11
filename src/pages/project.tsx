import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import Project from '../components/project/Project'
import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { sortPost } from '../utils/sortPost'

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('project'))
    const posts = files.map(filename => {
    const slug = filename.replace(".md", "")
    const  markdownWithMeta = fs.readFileSync(path.join("project", filename), 'utf-8')

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
  const pageTitle = 'Projects | jimquincy.tech'
  const pageDescription = 'Jim Quincy\'s Projects page'
  const pageUrl = 'https://jimquincy.tech/project'
  const pageImage = posts[0].frontmatter.cover_image

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:creator" content="@jimquincy" />
      </Head>
      <main>
        <Project key={index} posts={posts} index={0} />
      </main>
    </Layout>
  )
}
