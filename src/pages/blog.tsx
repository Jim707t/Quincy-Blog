import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

export default function blog() {
  return (
    <Layout>
    <Head>
        <title>Blog Post</title>
        <meta name="description" content="Jim Quincy's blog post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      blog
    </main>
    </Layout>
  )
}
