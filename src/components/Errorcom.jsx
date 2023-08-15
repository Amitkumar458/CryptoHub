import { Heading } from '@chakra-ui/react';
import React from 'react'

const Errorcom = ({msg}) => {
  return (
    <Heading paddingTop={['12', '16']}>{msg}</Heading>
  )
}

export default Errorcom;