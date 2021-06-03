// components/Form.js
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Tabs, TabList, Tab, TabPanel, TabPanels, Box, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react'

import logo from '../assets/images/logo.png'

function Form() {
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const titleColor = useColorModeValue('black', 'white')

  return (
    <Box w="400px" mx="auto" mt="80px" bgColor={bgColor} p={3} boxShadow="lg" borderRadius="lg">
      <Flex direction="row" align="center" justify="center" my="4">
        <Image src={logo} w="50px" mr="4" />
        <Heading size="lg" color={titleColor}>Chakra-UI</Heading>
      </Flex>
      {/* Tabs 选项卡组件 */}
      <Tabs isFitted>
        {/* TabList 选项卡标题 */}
        <TabList>
          {/* Tab 单个标题 */}
          <Tab _focus={{ boxShadow: 'none' }}>注册</Tab>
          <Tab _focus={{ boxShadow: 'none' }}>登录</Tab>
        </TabList>
        {/* TabPanels 选项卡内容 */}
        <TabPanels>
          {/* TabPanel 单个内容 */}
          <TabPanel>
            <SignUp />
          </TabPanel>
          <TabPanel>
            <SignIn />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Form
