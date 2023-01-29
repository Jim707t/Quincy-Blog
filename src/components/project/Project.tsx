import React from 'react'
import PCard from '../card/PCard'
import { Container, Divider, Grid, Heading } from '@chakra-ui/react'
  

export default function Safu({posts, index}:{posts: any, index: number}) {
  return (
    <Container maxW={'6xl'} pt="20" >
      <Heading as="h1" px={{base: '35%', md: 30}} m="auto" alignContent={'center'}>
        Projects
      </Heading>
      <Divider marginTop="5" mb={10} />
      
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }} gap={6} px={6}>
             {/* <PCard key={index} posts={posts} /> */}
             <Heading pl={50} pb={240} > Nothing yet!</Heading>
        </Grid>

    </Container>
  )
}
