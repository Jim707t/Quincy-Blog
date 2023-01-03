import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { event } from "nextjs-google-analytics";


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
        mb={50}
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
        <Button
          as={Link}
          href={`/blog/${post.slug}`}
            textDecoration='underline'
            onClick={() => {
              event("button_click", {
                category: "Read More Button",
                action: "Click",
                label: "Read More button was clicked"
              });
            }}
          _hover={{
            color: 'blue.300',
          }}>  Read More </Button>
        </Stack>
      </Box>
    
     ))}
    </> 
  )
}