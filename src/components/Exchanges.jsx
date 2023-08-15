import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from '..';
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Errorcom from './Errorcom';
import Loader from './Loader';
import Footer from './Footer';

const Exchanges = () => {
  const [exchange, setexchange] = useState([{}]);
  const [status, setstatus] = useState(false);
  const [error, seterror] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?per_page=100`);
        setexchange(data);
        setstatus(true);
      } catch (error) {
        seterror(true);
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  if(error) {
    return (
      <Errorcom msg={"Error while Feaching data From Server"}/>
    );
  }

  return (
    <Container maxW={'container.xl'} paddingTop={['12', '16']}>
      {status === true ?
        <HStack wrap={'wrap'} justifyContent={'center'}>
        {exchange.map((i) => {
          return (
            <Exchangecart name={i.name} link={i.url} key={i.id} img={i.image} rank={i.trust_score_rank}/>
            )
          })}
        </HStack>
        : <Loader/>}
      <Footer/>
    </Container>
  )
}

let Exchangecart = ({ name , link , img , rank}) => {
  return (
    <a href={link} target='blank'>
      <VStack shadow={'lg'} w={"56"} p={'8'} borderRadius={'lg'} m={'4'} transition={"all 0.3s"}
      css={{
        "&:hover":{
          transform:"scale(1.1)"
        }
      }}>
        <Image src={img} h={'10'} w={'10'} objectFit={'contain'}/>
        <Heading noOfLines={'1'} size={'md'}>{rank}</Heading>
        <Text size={'md'}>{name}</Text>
      </VStack>
    </a>
  )
}

export default Exchanges;