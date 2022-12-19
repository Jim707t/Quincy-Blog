import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from '../../components/Layout'
import Head from 'next/head'


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
    <section className="bg-white">
         <div className="mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
        <h1 className="text-3xl font-bold dark:text-gray-900 lg:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-gray-600">{date}</p>
        <div dangerouslySetInnerHTML={{__html: marked(content)}} className="mt-6  dark:text-gray-700"></div>
        </div>
    </div>
    </section>
    </Layout>
  )
}
