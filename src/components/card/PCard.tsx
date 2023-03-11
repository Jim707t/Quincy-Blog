import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function PCard({posts}: {posts: any}) {
    return (

      <>
      {posts.map((post: {
        slug: any;frontmatter: any
        }, index: number) => (


      <Center py={6} key={index}>

        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                post.frontmatter.cover_image
              }
              alt={'cover'}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
            {post.frontmatter.title}
            </Heading>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
             {post.frontmatter.description}
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                {post.frontmatter.tag}
              </Badge>
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
                <Button 
                as={Link}
                href={`/project/${post.slug}`}
                rightIcon={<ArrowForwardIcon />}
                w={5}
                flex={1}
                 colorScheme='blue' variant='outline'>
               See more
               </Button>
            </Stack>
          </Stack>
        </Stack>
        
      </Center>

   ))}
  </> 

 );
}
  
