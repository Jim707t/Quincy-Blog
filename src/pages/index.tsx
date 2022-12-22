import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import Hero from '../components/hero/Hero'
import Layout from '../components/Layout'
import { sortPost } from '../utils/sortPost'
import Head from 'next/head'

export async function getStaticProps() {
  // Read the contents of the 'content' directory
  const files = fs.readdirSync(path.join('content'))

  // Read slug and frontmatter from the 'content' directory
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "")

    // Read the frontmatter
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

export default function Home({posts, index}:{posts: any, index: number}) {

  return (
    <Layout>
      <Head>
        <title>Jim Quincy's website</title>
        <meta name="description" content="Tech space, find here stuff related to the world of tech and other interesting things that hipe me." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Hero key={index} posts={posts} index={0} />
    </main>
    </Layout>
  )
}

