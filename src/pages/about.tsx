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
} from '@chakra-ui/react';
import data from '../../data/data.json';
import SomeLink from '../components/link/Link';

export default function About() {
  const pageTitle = 'About | jimquincy.tech';
  const pageDescription =
    "I'm Jim, a passionate programmer who loves everything related to technology, especially decentralization and machine learning algorithms.";

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
      </Layout>
    </>
  );
}
