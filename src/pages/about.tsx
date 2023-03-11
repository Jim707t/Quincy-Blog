import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import {
  Text,
  Heading,
  Divider,
  Container,
  Box,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import data from '../../data/data.json';
import SomeLink from '../components/link/Link';

export default function About() {
  const pageTitle = 'About | jimquincy.tech';
  const pageDescription =
    "I'm Jim, I have particular interest in math, decentralization, and the many fascinating ways in which machines can learn and adapt. I've been tinkering with computers and coding since I was a teenager, and over the years I've become increasingly fascinated by its seemingly endless possibilities.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://jimquincy.tech/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
      <Box
		    bg={useColorModeValue('gray.50', 'gray.800')}
		    color={useColorModeValue('gray.700', 'gray.200')}>
        <Container maxW={'6xl'} pt="20">
          <Heading
            as="h1"
            px={{ base: '30%', md: 30 }}
            m="auto"
            alignContent={'center'}
          >
            About me
          </Heading>
          <Divider marginTop="5" />
          <Box
            margin="auto"
            display="flex"
            justifyContent="center"
            p={{ base: 10, md: 25 }}
          >
            <Text>
              {data.about.intro}
              <br />
              <br />
              {data.about.concl}
            </Text>
          </Box>
          <VStack p={5}>
            <SomeLink />
          </VStack>
         </Container>
        </Box>
      </Layout>
    </>
  );
}
