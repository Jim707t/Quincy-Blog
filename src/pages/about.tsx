import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { 
  Text,
  Heading,
  Divider,
  Container,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Link,
  Box,
  VStack,
} from '@chakra-ui/react'
import { BsGithub, BsInstagram, BsMastodon, BsReddit, BsTwitter } from 'react-icons/bs'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import data from '../../data/data.json'

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
      <Box margin="auto" display="flex" justifyContent="center" p={{base: 10, md:25}}>
      <Text>
      {data.about.text}
      </Text>
     </Box>
        <VStack p={10}>
    <List spacing={3}>
      <Text>Find me on</Text>
        <ListItem>
          <ListIcon as={BsGithub} color='blue.400' />
            <Link color='teal.500' href='https://github.com/Jim707t' isExternal> @github <ExternalLinkIcon mx='2px' /></Link> where i share code and contribute
         </ListItem>
        <ListItem>
       <ListIcon as={BsReddit} color='blue.400' />
       <Link color='teal.500' href='https://reddit.com/u/Jim707t' isExternal> @reddit <ExternalLinkIcon mx='2px' /></Link> for chill and news
      </ListItem>
      <ListItem>
          <ListIcon as={BsMastodon} color='blue.400' />
        <Link color='teal.500' href='https://cyberplace.social/@Jim' isExternal> @mastodon <ExternalLinkIcon mx='2px' /></Link> It's a cool DSMN
       </ListItem>
       <ListItem>
      <ListIcon as={BsTwitter} color='blue.400' />
      <Link color='teal.500' href='https://twitter.com/J1mQuincy' isExternal> @twitter <ExternalLinkIcon mx='2px' /></Link> no reason
      </ListItem>
      <ListItem>
      <ListIcon as={BsInstagram} color='blue.400' />
      <Link color='teal.500' href='https://instagram.com/j1mquincy' isExternal> @instagram <ExternalLinkIcon mx='2px' /></Link> for sharing some pretty stuff
     </ListItem>

    </List>
</VStack>

    </Container>
    </Layout>
    </>
  )
}
