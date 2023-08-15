import { Box, Button, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img3 from '../assets/img3.jpg';
import img2 from '../assets/img2.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const Home = () => {
  return (
    <>
      <MyCarousel />
      <Box textAlign={'center'}>
        <Heading size={['md' , 'lg']} padding={['1', '2']}>Features Of Cryptrocurrency</Heading>
      </Box>
      <Boxes/>
      <Footer/>
    </>
  )
}

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '20%',
  transform: 'translate(-50%,-50%)',
  p: ['2', '3'],
};
const headingOptions2 = {
  pos: 'absolute',
  left: '50%',
  top: ['80%', '90%'],
  transform: 'translate(-50%,-50%)',
  p: ['2', '3'],
  color: 'white',
  background: 'red'
};

const MyCarousel = () => {
  return (
    <Box paddingTop={['12', '16']} width={'full'}>
      <Carousel autoPlay={true} infiniteLoop interval={2000} showArrows={false} showThumbs={false} showStatus={false} stopOnHover={false}>
        <Box w="full" h={['full', '90vh']}>
          <Image src={img2} objectFit={'cover'} />
          <Heading bgColor={'blackAlpha.700'} size={['1xl', '3xl']} color={'white'} {...headingOptions}>
            Welcome To CryptoHub
          </Heading>
          <a href='/coins'><Button size={['xs', 'lg']} borderRadius={'full'} {...headingOptions2}>Explore Now</Button></a>
        </Box>
        <Box w="full" h={['full', '90vh']}>
          <Image src={img4} objectFit={'cover'} />
          <Heading bgColor={'blackAlpha.700'} size={['1xl', '3xl']} color={'white'} {...headingOptions}>
            Digital currency, Decentralized
          </Heading>
          <a href='/coins'><Button size={['xs', 'lg']} borderRadius={'full'} {...headingOptions2}>Explore Now</Button></a>
        </Box>
        <Box w="full" h={['full', '90vh']}>
          <Image src={img3} objectFit={'cover'} />
          <Heading bgColor={'blackAlpha.700'} size={['1xl', '3xl']} color={'white'} {...headingOptions}>
            Blockchain: Secure, Transparent
          </Heading>
          <a href='/coins'><Button size={['xs', 'lg']} borderRadius={'full'} {...headingOptions2}>Explore Now</Button></a>
        </Box>
        <Box w="full" h={['full', '90vh']}>
          <Image src={img5} objectFit={'cover'} />
          <Heading bgColor={'blackAlpha.700'} size={['1xl', '3xl']} color={'white'} {...headingOptions}>
            Secure your digital future.
          </Heading>
          <a href='/coins'><Button size={['xs', 'lg']} borderRadius={'full'} {...headingOptions2}>Explore Now</Button></a>
        </Box>
      </Carousel>
    </Box>
  )
}


const cardcss = {
  // background:"linear-gradient(137deg, rgb(255, 0, 179) 0%, rgba(0,212,255,1) 100%)",
  filter: "drop-shadow(0px 0px 30px rgba(209, 38, 197, 0.5))"
}
const Boxes = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      margin={['2', '4']}
      css={{...cardcss}}
    >
      <Stack spacing={'0'}>
        <CardBody>
          <Heading size={'md'}>$1.25 Trillion Marker Cap</Heading>
          <Text py='1'>
            The global cryptocurrency market cap today is $1.25 Trillion. The current market cap of Bitcoin is more than $500 Billion.
          </Text>
        </CardBody>
        <CardBody>
          <Heading size={'md'}>{"Decentralized (No Central Authority)"}</Heading>
          <Text py='1'>
            Bitcoin and other cryptocurrencies, these transactions can be processed and validated by a distributed and open network, that is owned by no-one.
          </Text>
        </CardBody>
        <CardBody>
          <Heading size={'md'}>Limited Supply and Scarcity</Heading>
          <Text py='1'>
            Fiat currencies have an unlimited supply that can be influenced by central banks, while many cryptocurrencies have a limited and predetermined supply that is determined by the consensus of the network participants. 
          </Text>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default Home