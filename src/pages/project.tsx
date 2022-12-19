import Head from 'next/head'
import React from 'react'
import PCard from '../components/card/PCard'
import Layout from '../components/Layout'

export default function project() {
  return (
    <Layout>
    <Head>
        <title>Projects | jimquincy.tech</title>
        <meta name="description" content="Jim Quincy's Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    
    <div className="container px-6 py-10 mx-auto">
    <h1 className=" items-center text-center text-3xl font-bold dark:text-gray-900 lg:text-4xl">Projects</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

       <PCard />
       </div>
       </div>
     
    
    </Layout>
  )
}
