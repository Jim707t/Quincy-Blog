import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Box,
         Container, 
         Heading,
         useColorModeValue,
         } from '@chakra-ui/react';

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Privacy &amp; Policy - Jim Quincy's Website</title>
        <meta name="description" content="Learn about the privacy and policy of Jim Quincy's website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Privacy &amp; Policy - Jim Quincy's Website" />
        <meta property="og:description" content="Learn about the privacy and policy of Jim Quincy's website." />
        <meta property="og:image" content="https://jimquincy.tech/og-image.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jimquincy.tech/privacy-policy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy &amp; Policy - Jim Quincy's Website" />
        <meta name="twitter:description" content="Learn about the privacy and policy of Jim Quincy's website." />
        <meta name="twitter:image" content="https://jimquincy.tech/twitter-image.png" />
        <meta name="twitter:creator" content="@jimquincy" />
      </Head>
      <Box
		    bg={useColorModeValue('gray.50', 'gray.800')}
		    color={useColorModeValue('gray.700', 'gray.200')}>
      <Container pt={40} pb={20} maxW="4xl">
        <Heading as="h1" size="xl" mb={6}>
          Privacy &amp; Policy
        </Heading>
        <Box>
          <p>
            On my website, one of my main priorities is the privacy of my visitors. This Privacy Policy document contains types of information that I collected, and how I use it. This Privacy Policy applies only to my online activities and is valid for visitors to my website with regards to the information that they shared and/or collect in jimquincy.tech. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
          <p>
            <strong>Consent:</strong> By using my website, you hereby consent to my Privacy Policy and agree to its terms.
          </p>
          <p>
            <strong>Information I Collect:</strong> I use the information we collect in various ways, including to:
          </p>
          <ul>
            <li>Provide, operate, and maintain my website</li>
            <li>Improve, personalize, and expand my website</li>
            <li>Understand and analyze how you use my website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Find and prevent fraud.</li>
          </ul>
          <p>
            <strong>Log Files:</strong> I follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

        <strong>  Cookies and Web Beacons </strong>:
        <p>
          Like any other website, I uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing my web page content based on visitors' browser type and/or other information.
        </p>
        <br></br>
        <br></br>
        
        <strong>  Advertising Partners Privacy Policies </strong>:
        <p>
          You may consult this list to find the Privacy Policy for each of the advertising my partners.
        </p>
        <br></br>
        <br></br>
        
        <strong>  Third Party Privacy Policies </strong>:
        <p> 
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
        </p>
      </Box>
      </Container>
     </Box>
    </Layout>
  )
}

