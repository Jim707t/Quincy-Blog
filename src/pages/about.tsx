import { Container, Divider, Text, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

export default function about() {
  return (
    <>
    <Head>
        <title>About | jimquincy.tech</title>
        <meta name="description" content="About Jim Quincy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
    <Container>
      <Heading as="h1" px={{base: '30%', md: 30}} m="auto" alignContent={'center'}>
        About me
      </Heading>
      <Divider marginTop="5" />
      
      <Text>
        Just an about
      </Text>

    </Container>
    </Layout>
    </>
  )
}
