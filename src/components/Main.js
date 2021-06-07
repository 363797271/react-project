// components/Form.js
import { useState } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Box, Flex, Link, Text } from '@chakra-ui/react'

function Form() {
  const [type, setType] = useState('signUp')
  const tabHoverStyles = {
    textDecoration: 'none',
    borderColor: '#ea6f5a'
  }
  const tabProps = {
    borderBottom: '2px solid transparent',
    _hover: tabHoverStyles,
    onClick: () => setType(type === 'signIn' ? 'signUp' : 'signIn')
  }

  return (
    <Box
      w="400px"
      p="50px 50px 30px"
      mx="auto"
      mt="30px"
      bgColor="white"
      boxShadow="0 0 8px rgb(0 0 0 / 10%)"
      borderRadius="4px"
    >
      <Flex fontSize="18px" color="#969696" justify="center" mb="50px">
        <Link
          p="10px"
          {...tabProps}
          color={type === 'signIn' ? '#ea6f5a' : '#969696'}
          borderColor={type === 'signIn' ? '#ea6f5a' : 'transparent'}
        >
          登录
        </Link>
        <Text p="10px">·</Text>
        <Link
          p="10px"
          {...tabProps}
          color={type === 'signUp' ? '#ea6f5a' : '#969696'}
          borderColor={type === 'signUp' ? '#ea6f5a' : 'transparent'}
        >
          注册
        </Link>
      </Flex>
      {type === 'signIn' && <SignIn />}
      {type === 'signUp' && <SignUp />}
    </Box>
  )
}

export default Form
