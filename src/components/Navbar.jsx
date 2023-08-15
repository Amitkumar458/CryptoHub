import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  VStack,
  HStack
} from '@chakra-ui/react';

import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from '../ColorModeSwitcher';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack bgColor={'blue'} width={'full'} h={['12', '16']} position={'fixed'} zIndex={'9999'}> 
        <Button onClick={onOpen} m={['1','2']} p={'0'} h={'10'} w={'10'} borderRadius={'full'} colorScheme={'purple'}>
          <BiMenuAltLeft size={'20'} />
        </Button>
        <Text fontSize={'xl'} color={'white'} fontWeight={'bold'} m={['0','2']}>Crypto<Text as={'span'} color={'black'} bgColor={'orange'} borderRadius={'3'}>Hub</Text></Text>
        <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              Crypto<Text as={'span'} bgColor={'orange'} borderRadius={'3'}>Hub</Text>
            </DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button variant={'ghost'} onClick={onClose} colorScheme='purple'>
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button variant={'ghost'} onClick={onClose} colorScheme='purple'>
                  <Link to={'/coins'}>Coins</Link>
                </Button>
                <Button variant={'ghost'} onClick={onClose} colorScheme='purple'>
                  <Link to={'/exchanges'}>Exchanges</Link>
                </Button>
                <Button variant={'ghost'} onClick={onClose} colorScheme='purple'>
                  <Link to={'/about'}>About us</Link>
                </Button>
              </VStack>
            </DrawerBody>
            <DrawerFooter borderTopWidth='1px' justifyContent={'flex-start'}>
             <Text>{"</> & Develop By ❤️ Amit"}</Text>
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <ColorModeSwitcher />
      </HStack>
    </>
  )
}

export default Navbar;