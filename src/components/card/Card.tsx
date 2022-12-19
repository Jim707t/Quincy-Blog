import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';


export default function Card({posts}: {posts: any}) {
  return (
        
    <>
      {posts.map((post: {
        slug: any;frontmatter: any
        }, index: number) => (

      <Box
        key={index}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Text
            color={'blue.300'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {post.frontmatter.tag}
          </Text> 
          <Text color={'gray.500'}>{post.frontmatter.date}</Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {post.frontmatter.title}
          </Heading>
          <Text color={'gray.500'}>
          {post.frontmatter.subtitle}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Link 
            textDecoration='underline'
          href={`/blog/${post.slug}`} 
          _hover={{
            color: 'blue.300',
          }}>  Read More </Link>
        </Stack>
      </Box>

    
     ))}
    </> 
  )
}