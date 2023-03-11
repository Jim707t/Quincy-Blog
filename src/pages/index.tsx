import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Hero from '../components/hero/Hero'
import Layout from '../components/Layout'
import { sortPost } from '../utils/sortPost'
import Head from 'next/head'

type Frontmatter = {
  title: string;
  description: string;
  image: string;
}

type Post = {
  slug: string;
  frontmatter: Frontmatter;
}

type HomeProps = {
  posts: Post[];
}

export async function getStaticProps() {

  const files = fs.readdirSync(path.join('content'))
  const posts = files.map(filename => {
    const slug = filename.replace(".md", "")
    const markdownWithMeta = fs.readFileSync(path.join("content", filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
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

export default function Home({ posts }: HomeProps) {

  const recentPosts = posts.slice(0, 6)

  return (
    <Layout>
      <Head>
        <title>Jim Quincy's website</title>
        <meta name="description" content="Find here stuff related to the world of tech and other interesting things that hipe me." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Jim Quincy's website" />
        <meta property="og:description" content="Find here stuff related to the world of tech and other interesting things that hipe me." />
        <meta property="og:image" content={recentPosts[0].frontmatter.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jimquincy.tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jim Quincy's website" />
        <meta name="twitter:description" content="Find here stuff related to the world of tech and other interesting things that hipe me." />
        <meta name="twitter:image" content={recentPosts[0].frontmatter.image} />
        <meta name="twitter:creator" content="@jimquincy" />
      </Head>
      <main>
        <Hero posts={recentPosts} index={0} />
      </main>
    </Layout>
  )
}
