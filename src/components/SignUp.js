// components/SignUp.js
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  Select,
  Switch,
  FormLabel,
  Flex,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck } from 'react-icons/fa'

function SignUp() {
  const bgColor = useColorModeValue('white', 'inherit')

  return (
    <form>
      <Stack spacing="2">
        <FormControl isDisabled isInvalid>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="请输入用户名" />
          </InputGroup>
          <FormHelperText>用户名是必填项</FormHelperText>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input placeholder="请输入密码" type="password" bgColor={bgColor} />
          <InputRightAddon children={<FaCheck />} />
        </InputGroup>
        <RadioGroup defaultValue="0">
          <Stack direction="row">
            <Radio value="0">男</Radio>
            <Radio value="1">女</Radio>
          </Stack>
        </RadioGroup>
        <Select placeholder="请选择所在城市" bgColor={bgColor}>
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="深圳">深圳</option>
        </Select>
        <Flex>
          <Switch id="deal" mr="3" />
          <FormLabel htmlFor="deal">是否同意协议</FormLabel>
        </Flex>
        <Button _hover={{bgColor: 'tomato'}} w="100%" colorScheme="teal">注册</Button>
      </Stack>
    </form>
  )
}

export default SignUp
