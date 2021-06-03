// components/Card.js
import { Box, Image, Badge, Text, Stack, Heading, Flex, Button, useColorModeValue } from '@chakra-ui/react'
import logo from '../assets/images/logo.png'
import { AiFillStar } from 'react-icons/ai'

function Card() {
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.100')

  return (
    <Box bgColor={bgColor} w="400px" borderRadius="lg" boxShadow="lg" mx="auto" mt="80px" overflow="hidden">
      <Box bgColor="#26b7a8" pt="20" pb="20">
        <Flex direction="row" align="center" justify="center" my="4">
          <Image src={logo} w="50px" mr="4" />
          <Heading size="lg" color="white">Chakra-UI</Heading>
        </Flex>
      </Box>
      <Box p="3">
        <Stack direction="row" align="center">
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">
            New
          </Badge>
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">
            React
          </Badge>
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">
            Chakra-UI
          </Badge>
          <Text color="textColor">CSS in JS 解决方案</Text>
        </Stack>
        <Heading size="md" pt="3" pb="2" color="gray.500">
          Chakra-UI 库介绍
        </Heading>
        <Text color={textColor} fontWeight="light" fontSize="sm" lineHeight="tall">
          Chakra UI 是一个简单、模块化且可访问的组件库，它为您提供构建 React
          应用程序所需的构建块。ChakraUI包含一组布局组件，如 Box 和 Stack
          这样就可以通过传递Props来简化组件的样式设计。Chakra UI 组件构建在 ReactiveUI
          原语之上，以实现无数的可组合性。Chakra UI 中的大多数组件都是兼容暗模容的。
        </Text>
        <Flex mt="2" align="center">
          <Flex color="teal.500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Flex>
          <AiFillStar />
          <Text ml="1">100 评论</Text>
        </Flex>
      </Box>
      <Button w="100%" colorScheme="teal">
        登录
      </Button>
    </Box>
  )
}

export default Card
