import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { Box, 
         Container, 
         Heading,} from '@chakra-ui/react'
      


export default function Post(){

  return (
    <Layout>
        <Head>
        <title>Privacy & policy</title>
        <meta name="description" content="Jim Quincy's website privacy & policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Container pt={40} pb={20} maxW={'4xl'}>
       <br></br>
       <br></br>
        <Box>
          <strong>  Privacy & policy </strong>:
        On my website, one of my main priorities is the privacy of my
        visitors. This Privacy Policy document contains types of information
        that i collected, and how i use it. This Privacy Policy applies only
        to my online activities and is valid for visitors to my website with
        regards to the information that they shared and/or collect in Jim707t.
        This policy is not applicable to any information collected offline or via channels 
        other than this website.
        <br></br>
        <br></br>
        
        <strong>  Consent </strong>:
        By using my website, you hereby consent to my Privacy Policy and agree
        to its terms. Information i collect How i use your information i use
        the information we collect in various ways, including to:
        <br></br>
        • Provide, operate, and maintain my website
        <br></br>
        • Improve, personalize, and expand my website
        <br></br>
        • Understand and analyze how you use my website
        <br></br>
        • Develop new products, services, features, and functionality
        <br></br>
        • Find and prevent fraud.
        <br></br>
        <br></br>
        
        <strong> Log Files</strong>
        I follows a standard procedure of using log files. These
        files log visitors when they visit websites. All hosting companies do
        this and a part of hosting services' analytics. The information
        collected by log files include internet protocol (IP) addresses,
        browser type, Internet Service Provider (ISP), date and time stamp,
        referring exit pages, and possibly the number of clicks. These are not
        linked to any information that is personally identifiable. The purpose
        of the information is for analyzing trends, administering the site,
        tracking users' movement on the website, and gathering demographic
        information.
        <br></br>
        <br></br>
        
        <strong>  Cookies and Web Beacons </strong>:
        
        Like any other website, I uses 'cookies'. These cookies are used to
        store information including visitors' preferences, and the pages on
        the website that the visitor accessed or visited. The information is
        used to optimize the users' experience by customizing my web page
        content based on visitors' browser type and/or other information.
        <br></br>
        <br></br>
        
        <strong>  Advertising Partners Privacy Policies </strong>:
        
        You may consult this list to find the Privacy Policy for each of the
        advertising my partners.
        <br></br>
        <br></br>
        
        <strong>  Third Party Privacy Policies </strong>:
        
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management
        with specific web browsers, it can be found at the browsers'
        respective websites.
     </Box>
      </Container>
    </Layout>
  )
}

