import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript />
      <ChakraProvider>
        <App/>
      </ChakraProvider>
  </React.StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3';