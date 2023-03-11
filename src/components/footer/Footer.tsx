import {
	Box,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue,
	Image,
  } from '@chakra-ui/react';
  
import { 
	useEffect, 
	useState } from 'react';

import { BsGithub } from 'react-icons/bs';
  

  
 
export default function Footer() {

	const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
    const interval = setInterval(() => {
    setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
     }, []);

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
    });

	return (
	  <Box
		bg={useColorModeValue('gray.50', 'gray.900')}
		color={useColorModeValue('gray.700', 'gray.200')}>

		<Container
		  as={Stack}
		  maxW={'6xl'}
		  py={4}
		  spacing={4}
		  justify={'center'}
		  align={'center'}>
			
		  <a href="/">
              <Image
              src={useColorModeValue('/assets/jim_quincy_Logo_noir.png', '/assets/jim_quincy_Logo_blanc.png')}
              alt="image"
              height={50}
              width={79}
              /></a>

		  <Stack direction={'row'} spacing={6}>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
			<Link href={'/privacy-&-policy'}>Privacy & policy</Link>
		  </Stack>
		</Container>
  
		<Box
		  borderTopWidth={1}
		  borderStyle={'solid'}
		  borderColor={useColorModeValue('gray.200', 'gray.700')}>
		  <Container
			as={Stack}
			maxW={'6xl'}
			py={4}
			direction={{ base: 'column', md: 'row' }}
			spacing={4}
			justify={{ base: 'center', md: 'space-between' }}
			align={{ base: 'center', md: 'center' }}>
			 <Text>© 2022 - {dateFormatter.format(currentDate)}  Jim Quincy. All rights reserved</Text>
			  <Stack direction={'row'} spacing={6}>
			    <Text color={'gray.500'}>
                 Want to modify something? Source code <Link isExternal color={'blue.500'} href='https://github.com/Jim707t/Quincy-Blog'>here</Link>.
                </Text>
				<Link isExternal href='https://github.com/Jim707t'>
				<BsGithub/>
				</Link>
			</Stack>
		  </Container>
		</Box>
	  </Box>
	);
  }

