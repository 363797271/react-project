import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function App() {
  const initialValues = {
    username: '',
    password: ''
  }
  const validationSchema = Yup.object({
    username: Yup.string()
      .max(15, '用户名长度不得超过15个字')
      .required('请输入用户名'),
    password: Yup.string()
      .min(6, '密码长度不得小于6')
      .required('请输入密码')
  })
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <Field name="username" />
        <ErrorMessage name="username" />
        <Field name="password" />
        <ErrorMessage name="password" />
        <input type="submit" />
      </Form>
    </Formik>
  )
}

export default App
