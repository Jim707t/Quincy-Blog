import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Grid,
  Flex,
} from '@chakra-ui/react';
import Card from '../card/Card'
import data from '../../../data/data.json'
import { BsWifi } from 'react-icons/bs';

export default function Hero({posts, index}:{posts: any, index: number}) {
  return (
    <>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: '9rem', md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            {data.home_hero.title_1} {" "}
            <Text as={'span'} color={'blue.400'}>
            {data.home_hero.title_2}
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          {data.home_hero.description}
          </Text>
          
        </Stack>
        
      </Container>
      <Heading textAlign={'center'} pb={5}>  Lastest </Heading>
      <Box m={'auto'}
      alignItems={'center'}
      justifyContent={'center'}
      px={{sm: 5, base: 5, md: 100, xl: 190}}
      pb={{base: 50, xl: 50}}
      >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
        <Card key={index} posts={posts}/>
        </Grid>
        </Box>
    </>
  );
}