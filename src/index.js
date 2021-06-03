// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    {/* 一定要记得将主题对象传递给 ChakraProvider */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
