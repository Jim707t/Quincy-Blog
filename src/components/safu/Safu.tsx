import React from 'react'
import Card from '../card/Card'
import { Container, Divider, Grid, Heading } from '@chakra-ui/react'
  

export default function Safu({posts, index}:{posts: any, index: number}) {
  return (
    <Container maxW={'7xl'} pt="20">
      <Heading as="h1" px={{base: '30%', md: 30}} m="auto" alignContent={'center'}>
        Blog posts
      </Heading>
      <Divider marginTop="5" />
      
         <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
             <Card key={index} posts={posts} />
        </Grid>

    </Container>
  )
}
