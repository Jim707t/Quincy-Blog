import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { 
  Text,
  Heading,
  Divider,
  Container,
  Box,
  VStack,
} from '@chakra-ui/react'
import data from '../../data/data.json'
import SomeLink from '../components/link/Link'

export default function about() {
  return (
    <>
    <Head>
        <title>About | jimquincy.tech</title>
        <meta name="description" content="I'm Jim I'm a passionate programmer by all that concerns technology, especialy the technology of decentralisation and algorithms that learn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
    <Container maxW={'6xl'} pt="20" >
      <Heading as="h1" px={{base: '30%', md: 30}} m="auto" alignContent={'center'}>
        About me
      </Heading>
      <Divider marginTop="5" />
      <Box margin="auto" display="flex" justifyContent="center" p={{base: 10, md:20}}>
      <Text>
      {data.about.text}
      </Text>
     </Box>
      <VStack p={5}>
   <SomeLink />
</VStack>

    </Container>
    </Layout>
    </>
  )
}
