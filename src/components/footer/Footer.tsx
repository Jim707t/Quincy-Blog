import {
	Box,
	chakra,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
	Image,
  } from '@chakra-ui/react';
  import { FaGithub } from 'react-icons/fa';
  import { useEffect, useState } from 'react';
  import { ReactNode } from 'react';
  

  
  const SocialButton = ({
	children,
	label,
	href,
  }: {
	children: ReactNode;
	label: string;
	href: string;
  }) => {
	return (
	  <chakra.button
		bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
		rounded={'full'}
		w={8}
		h={8}
		cursor={'pointer'}
		as={'a'}
		href={href}
		display={'inline-flex'}
		alignItems={'center'}
		justifyContent={'center'}
		transition={'background 0.3s ease'}
		_hover={{
		  bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
		}}>
		<VisuallyHidden>{label}</VisuallyHidden>
		{children}
	  </chakra.button>
	);
  };
  
  export default function SmallCentered() {

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
              src={useColorModeValue('https://gateway.pinata.cloud/ipfs/QmNRvWSfgSFF28J95QZGJcxXNQaSEt53LtEc3TKtqSJS1X/Jim_Quincy_Logo_noir.jpg', 'https://gateway.pinata.cloud/ipfs/QmNRvWSfgSFF28J95QZGJcxXNQaSEt53LtEc3TKtqSJS1X/Jim_Quincy_Logo_blanc.png')}
              alt="image"
              height={50}
              width={79}
              /></a>

		  <Stack direction={'row'} spacing={6}>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
			<Link href={'/privacy-policy'}>Privacy & Policy</Link>
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
				<FaGithub />
				</Link>
			</Stack>
		  </Container>
		</Box>
	  </Box>
	);
  }

