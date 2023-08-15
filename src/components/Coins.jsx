import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from '..';
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Errorcom from './Errorcom';
import CoinsCart from './CoinsCart';
import Loader from './Loader';
import Footer from './Footer';

const Coins = () => {
  const [exchange, setexchange] = useState([{}]);
  const [status, setstatus] = useState(false);
  const [error, seterror] = useState(false);
  const [curr, setcurr] = useState("inr");
  const [page, setpage] = useState(1);
  const [col, setcol] = useState(0);

  let sign = curr === "inr" ? '₹' : curr === "usd" ? '$' : '€';

  useEffect(() => {
    setstatus(false);
    window.scrollTo(0,0);
    let fetchdata = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en`);
        setexchange(data);
        setstatus(true);
      } catch (error) {
        seterror(true);
      }
    }
    fetchdata();
  }, [page, curr]);

  if (error) {
    return (
      <Errorcom msg={"Error while Feaching data From Server"} />
    );
  }

  const btns = new Array(100).fill(1);

  return (
    <Container maxW={'container.xl'} paddingTop={['12', '16']}>
      <RadioGroup value={curr} onChange={setcurr}>
        <HStack p={'4'} spacing={'4'}>
          <Radio value='inr'>INR</Radio>
          <Radio value='usd'>USD</Radio>
          <Radio value='eur'>EUR</Radio>
        </HStack>
      </RadioGroup>
      {status === true ?
        <HStack wrap={'wrap'} justifyContent={'center'}>
          {exchange.map((i) => {
            return (
              <CoinsCart name={i.name} id={i.id} key={i.id} img={i.image} price={i.current_price} tag={sign} />
            )
          })}
        </HStack>
        : <Loader />
      }
      <HStack overflowX={'scroll'} width={'full'} p={'8'} m={'2'}>
        {
          btns.map((i, index) => {
            if(index === col){
              return <Button key={index} css={{"&:hover":{color:"red"}}} background={'red'} onClick={() => { setpage(index + 1) }}> {index + 1} </Button>
            }else{
              return <Button key={index} onClick={() => { setpage(index + 1); setcol(index); }}> {index + 1} </Button> 
            }
          })
        }
      </HStack>
      <Footer/>
    </Container >
  )
}

export default Coins;