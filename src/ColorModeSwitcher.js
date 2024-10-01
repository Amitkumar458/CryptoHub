import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      m={['1','2']}
      variant="ghost"
      position={'fixed'}
      right={'2'}
      color="white"
      background={'blackAlpha.300'}
      borderRadius={'full'}
      onClick={toggleColorMode}
      icon={<SwitchIcon/>}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
