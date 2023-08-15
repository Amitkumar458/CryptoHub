import { Box, Spinner, VStack } from '@chakra-ui/react';
import React from 'react'

const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={["scale(3)" , "scale(5)"]} color={'red'}>
        <Spinner size={'md'} emptyColor='gray.200' speed='0.30s'/>
      </Box>
    </VStack>
  )
}

export default Loader;