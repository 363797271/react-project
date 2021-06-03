// App.js
import { useState } from 'react'
import { Box, Button, Stack, Link, useColorMode } from '@chakra-ui/react'
import Form from './components/Form'
import Card from './components/Card'

function App() {
  const { toggleColorMode } = useColorMode()
  const [type, setType] = useState('form')

  return (
    <Box>
      <Stack mt="20px" justify="center" direction="row" align="center">
        <Link color={type==='form' ? 'teal.500' : 'inherit'} onClick={() => setType('form')}>表单</Link>
        <Link  color={type==='card' ? 'teal.500' : 'inherit'} onClick={() => setType('card')}>卡片</Link>
        <Button onClick={toggleColorMode}>切换颜色模式</Button>
      </Stack>
      {type==='form' && <Form />}
      {type==='card' && <Card />}
    </Box>
  )
}

export default App
