import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Grid,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaRssSquare } from "react-icons/fa";
import Card from '../card/Card';
import data from '../../../data/data.json';




export default function Hero({posts, index}:{posts: any, index: number}) {
  return (

    <Box
		  bg={useColorModeValue('gray.50', 'gray.900')}
		  color={useColorModeValue('gray.700', 'gray.200')}>

      <Container maxW={'3xl'}>

        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: '9rem', md: 20 }}>
          <Heading
            fontWeight={550}
            fontSize={{ base: '3xl', sm: '4xl', md: '8xl' }}
            lineHeight={'110%'}>
            {data.home_hero.title_1} {" "}
            <Text as={'span'} color={'blue.400'}>
            {data.home_hero.title_2}
            </Text>
          </Heading>
          <Text fontSize={{ base: 17, md: 22 }} color={'gray.500'}>
          {data.home_hero.description}
          </Text>
          
        </Stack>
    
      </Container>



      <Center>
       <Heading pb={5}>  Lastest  
      </Heading>
      <FaRssSquare size={20} style={{ color: "#black", marginLeft: "0.8rem", marginBottom: "0.5rem" }} />
      </Center>

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
    </Box>
  );
}