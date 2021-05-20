import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'

function MyCheckBox({ label, name, ...props }) {
  const [field, meta, helper] = useField({ name })
  const { value } = meta
  const { setValue } = helper
  console.log('meta', meta)
  console.log('helper', helper)

  const handleChange = () => {
    const set = new Set(value)
    if (set.has(props.value)) {
      set.delete(props.value)
    } else {
      set.add(props.value)
    }
    setValue([...set])
  }

  return (
    <div>
      <label>
        <input type="checkbox" name={name} checked={value.includes(props.value)} {...props} onChange={handleChange} /> {props.value}
      </label>
    </div>
  )
}

function App() {
  const initialValues = {
    username: '',
    hobbies: ['足球', '篮球']
  }
  const validationSchema = Yup.object({
    username: Yup.string().max(15, '用户名长度不得超过15个字').required('请输入用户名')
  })
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <Field name="username" />
        <ErrorMessage name="username" />
        <MyCheckBox value="足球" label="足球" name="hobbies" />
        <MyCheckBox value="篮球" label="篮球" name="hobbies" />
        <MyCheckBox value="橄榄球" label="橄榄球" name="hobbies" />
        <input type="submit" />
      </Form>
    </Formik>
  )
}

export default App
