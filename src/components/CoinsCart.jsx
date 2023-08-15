import { Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

let CoinsCart = ({ name , id , img , price , tag}) => {
    return (
      <Link to={`/coin/${id}`}>
        <VStack shadow={'lg'} w={"56"} p={'8'} borderRadius={'lg'} m={'4'} transition={"all 0.3s"}
        css={{
          "&:hover":{
            transform:"scale(1.1)"
          }
        }}>
          <Image src={img} h={'10'} w={'10'} objectFit={'contain'}/>
          <Heading noOfLines={'1'} size={'md'}>{tag}{price}</Heading>
          <Text size={'lg'}>{name}</Text>
          <a href={`/${id}`}><Button size={'xs'} background={'red'} borderRadius={'full'} >Know More</Button></a>
        </VStack>
      </Link>
    )
  }

export default CoinsCart;