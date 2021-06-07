// components/SignIn.js
import { useMemo, useState } from 'react'
import {
  Box,
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Button,
  Checkbox,
  Flex,
  Text,
  Divider,
  AlertIcon,
  Alert
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaLock, FaWeibo, FaWeixin, FaQq } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import request from '../utils/request'

function SignIn() {
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('不是合法的邮箱格式').required('请输入邮箱'),
      password: Yup.string().min(8, '密码不正确').required('请输入密码')
    }),
    onSubmit: user => {
      request
        .post('/api/users/login', {
          user
        })
        .then(res => {
          setErrMsg('')
          setSuccess(true)
        })
        .catch(res => {
          const errors = res?.response?.data?.errors || {}
          setErrMsg(
            Object.keys(errors)
              .map(e => `${e} ${errors[e]}`)
              .join('; ')
          )
        })
    }
  })

  useMemo(() => {
    const msg = Object.keys(formik.errors).length > 0 ? formik.errors[Object.keys(formik.errors)[0]] : ''
    if (msg) {
      setErrMsg(msg)
    } else {
      setErrMsg('')
    }
  }, [formik.errors])

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box borderRadius="md" border="1px solid" borderColor="gray.300">
        <InputGroup size="lg">
          <InputLeftElement color="#969696" pointerEvents="none" children={<MdEmail />} />
          <Input
            {...formik.getFieldProps('email')}
            placeholder="邮箱"
            bgColor="#f7f7f7"
            border="none"
            fontSize="14px"
          />
        </InputGroup>
        <Divider borderColor="gray.300" />
        <InputGroup size="lg">
          <InputLeftElement color="#969696" pointerEvents="none" children={<FaLock />} />
          <Input
            {...formik.getFieldProps('password')}
            placeholder="密码"
            bgColor="#f7f7f7"
            border="none"
            fontSize="14px"
          />
        </InputGroup>
      </Box>
      {errMsg && (
        <Alert status="error" size="sm">
          <AlertIcon />
          {errMsg}
        </Alert>
      )}
      {success && (
        <Alert status="success" size="sm">
          <AlertIcon />
          注册成功，跳转到首页...
        </Alert>
      )}
      <Flex justify="space-between" alignItems="center" py="15px">
        <Checkbox size="sm" colorScheme="gray" color="#969696">
          <Text fontSize="15px">记住我</Text>
        </Checkbox>
        <Text color="#999" fontSize="12px">
          登录遇到问题？
        </Text>
      </Flex>
      <Button onClick={formik.handleSubmit} w="100%" colorScheme="blue" borderRadius="full" fontWeight="500">
        登录
      </Button>
      <Box mt="50px">
        <Stack justify="center" direction="row" spacing="24px" align="center">
          <Divider borderColor="#b5b5b5" w="60px" />
          <Text color="#b5b5b5" fontSize="12px">
            社交账号登录
          </Text>
          <Divider borderColor="#b5b5b5" w="60px" />
        </Stack>
      </Box>
      <Stack mt="25px" mb="10px" justify="center" direction="row" spacing="34px" align="center" fontSize="24px">
        <FaWeibo color="#e05244" />
        <FaWeixin color="#00bb29" />
        <FaQq color="#498ad5" />
      </Stack>
    </form>
  )
}

export default SignIn
