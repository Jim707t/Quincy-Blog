import React from 'react'
import { 
  Text,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react'

import { 
  BsGithub, 
  BsInstagram, 
  BsMastodon, 
  BsReddit, 
  BsTwitter } from 'react-icons/bs'

import { ExternalLinkIcon } from '@chakra-ui/icons'




export default function SomeLink() {
  return (
    <>
    <List spacing={3}>

      <Text>Find me on:</Text>
        <ListItem>
          <ListIcon as={BsGithub} color='blue.400' />
            <Link color='teal.500' href='https://github.com/Jim707t' isExternal> Github(Jim707t) <ExternalLinkIcon mx='2px' /></Link>
         </ListItem>
        <ListItem>
          <ListIcon as={BsReddit} color='blue.400' />
            <Link color='teal.500' href='https://reddit.com/u/Jim707t' isExternal> Reddit(Jim707t) <ExternalLinkIcon mx='2px' /></Link> 
          </ListItem>
        <ListItem>
          <ListIcon as={BsMastodon} color='blue.400' />
            <Link color='teal.500' href='https://cyberplace.social/@Jim' isExternal> Mastodon(Jim) <ExternalLinkIcon mx='2px' /></Link> 
          </ListItem>
        <ListItem>
        <ListIcon as={BsTwitter} color='blue.400' />
            <Link color='teal.500' href='https://twitter.com/J1mQuincy' isExternal> Twitter(J1mQuincy) <ExternalLinkIcon mx='2px' /></Link> 
        </ListItem>
        <ListItem>
        <ListIcon as={BsInstagram} color='blue.400' />
            <Link color='teal.500' href='https://instagram.com/j1mquincy' isExternal> Instagram(J1mQuincy) <ExternalLinkIcon mx='2px' /></Link> 
        </ListItem>

    </List>
    </>
  )
}
