import React, { useEffect, useState } from 'react'
import Errorcom from './Errorcom';
import axios from 'axios';
import { server } from '..';
import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import Chart from './Chart';
import Footer from './Footer';

const Coindetails = () => {
  const params = useParams();
  const [exchange, setexchange] = useState([{}]);
  const [status, setstatus] = useState(true);
  const [error, seterror] = useState(false);
  const [curr, setcurr] = useState("inr");
  const [chartdata, setchartdata] = useState([]);
  const [days, setdays] = useState("24h");

  const dbtn = ['24h', '7d', '14d', '30d', '60d', '200d', '1y', 'max'];

  let sign = curr === "inr" ? '₹' : curr === "usd" ? '$' : '€';

  useEffect(() => {
    let fetchdata = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: cdata } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${curr}&days=${days}`);
        setexchange(data);
        setchartdata(cdata.prices);
        setstatus(false);
      } catch (error) {
        seterror(true);
      }
    }
    fetchdata();
  }, [curr, params.id, days]);

  if (error) {
    return (
      <Errorcom msg={"Error while Feaching data From Server"} />
    );
  }

  return (
    <Container maxW={'container.md'} paddingTop={['12', '16']}>
      {status === true ? <Loader /> :
        <>
          <Chart curr={sign} days={days} arr={chartdata} />
          <HStack overflowX={'scroll'} width={'full'} p={'8'} m={'2'}>
            {dbtn.map((i) => {
              if (days === i) {
                return <Button key={i} css={{ "&:hover": { color: "red" } }} background={'blackAlpha.400'} onClick={() => { setdays(i) }}> {days} </Button>
              } else {
                return <Button key={i} onClick={() => { setdays(i); }}> {i} </Button>
              }
            })}
          </HStack>
          <RadioGroup value={curr} onChange={setcurr}>
            <HStack p={'4'} spacing={'4'}>
              <Radio value='inr'>INR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={'2'} padding={'8'} alignItems={'flex-start'}>
            <Text fontSize={'small'} opacity={0.7} alignSelf='center'>
              Last updated on {Date().split('G')[0]}
            </Text>
            <Image src={exchange.image.large} w={'16'} h={'16'} objectFit />
            <Stat>
              <StatLabel>{exchange.id}</StatLabel>
              <StatNumber>{sign}{exchange.market_data.current_price[curr]}</StatNumber>
              <StatHelpText>
                <StatArrow type={exchange.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                {exchange.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge color='white' bgColor={'blackAlpha.900'} fontSize={'2xl'}>
              #{exchange.market_cap_rank}
            </Badge>
            <CustomBar high={`${sign}${exchange.market_data.high_24h[curr]}`} low={`${sign}${exchange.market_data.low_24h[curr]}`} />
            <Box w={'full'} p={'4'}>
              <Item title={"Market Cap"} value={`${sign}${exchange.market_data.market_cap[curr]}`} />
              <Item title={"Circulating Supply"} value={`${exchange.market_data.circulating_supply}`} />
              <Item title={"Max Supply"} value={`${exchange.market_data.max_supply}`} />
              <Item title={"All Time Low"} value={`${sign}${exchange.market_data.atl[curr]}`} />
              <Item title={"All TIme HIgh"} value={`${sign}${exchange.market_data.ath[curr]}`} />
            </Box>
          </VStack>
        </>
      }
      <Footer/>
    </Container>
  )
}

const Item = ({ title, value }) => {
  return <HStack w={'full'} p={'4'} justifyContent={'space-between'}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={'widest'}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
}

const CustomBar = ({ high, low }) => {
  return <VStack w={'full'}>
    <Progress value={'50'} colorScheme={'teal'} w={'full'} />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme='red' />
      <Text>24 Hour Range</Text>
      <Badge children={high} colorScheme='green' />
    </HStack>
  </VStack>
}

export default Coindetails;