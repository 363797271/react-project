// components/SignUp.js
import { useMemo, useState } from 'react'
import {
  Box,
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Button,
  Link,
  Text,
  Divider,
  AlertIcon,
  Alert
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaWeixin, FaQq } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import request from '../utils/request'

function SignUp() {
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('不是合法的邮箱格式').required('请输入邮箱'),
      username: Yup.string().max(15, '用户名长度不得超过15个字').required('请输入用户名'),
      password: Yup.string().min(8, '密码长度不得小于8').required('请输入密码')
    }),
    onSubmit: user => {
      request
        .post('/api/users', {
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
          <InputLeftElement color="#969696" pointerEvents="none" children={<FaUserAlt />} />
          <Input
            {...formik.getFieldProps('username')}
            placeholder="你的昵称"
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
            placeholder="设置密码"
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
          注册成功，请前往登录
        </Alert>
      )}
      <Button
        onClick={formik.handleSubmit}
        mt="20px"
        w="100%"
        bgColor="#42c02e"
        color="white"
        _hover={{ bgColor: '#3db922' }}
        borderRadius="full"
        fontWeight="500"
      >
        注册
      </Button>
      <Text fontSize="12px" my="10px" color="#969696" lineHeight="20px" textAlign="center">
        点击 “注册” 即表示您同意并愿意遵守简书
        <br />
        <Link color="#3194d0">用户协议</Link> 和 <Link color="#3194d0">隐私政策</Link> 。
      </Text>
      <Box mt="50px">
        <Stack justify="center" direction="row" spacing="24px" align="center">
          <Divider borderColor="#b5b5b5" w="60px" />
          <Text color="#b5b5b5" fontSize="12px">
            社交账号直接注册
          </Text>
          <Divider borderColor="#b5b5b5" w="60px" />
        </Stack>
      </Box>
      <Stack mt="25px" mb="10px" justify="center" direction="row" spacing="34px" align="center" fontSize="24px">
        <FaWeixin color="#00bb29" />
        <FaQq color="#498ad5" />
      </Stack>
    </form>
  )
}

export default SignUp
