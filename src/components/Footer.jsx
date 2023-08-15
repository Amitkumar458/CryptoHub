import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
  
  const SocialButton = ({
    children,
    label,
    href,
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
  
  export default function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={2}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>{"</> & Develop By ❤️ Amit."}</Text>
          <Stack direction={'row'} spacing={3}>
            <SocialButton target='_blank' href={'https://www.linkedin.com/in/amit-kumar-47838722b/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton href={'https://www.instagram.com/amit.kumar3998/'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton href={'#'}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }