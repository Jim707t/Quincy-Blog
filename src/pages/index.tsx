import Head from 'next/head'
import Hero from '../components/hero/Hero'
import Layout from '../components/Layout'
import fs from 'fs'


export default function Home() {

  return (
    <Layout>
    <Head>
        <title>Jim Quincy's website</title>
        <meta name="description" content="Jim Quincy's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
     <Hero />
    </main>
    </Layout>
  )
}
/* 

async function readMarkdownFiles(folder) {
  try {
    const files = await fs.readdir(folder);
    for (const file of files) {
      if (file.endsWith('.md')) {
        const contents = await fs.readFile(`${folder}/${file}`, 'utf8');
        console.log(contents);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

readMarkdownFiles('path/to/folder'); */
