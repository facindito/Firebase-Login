import { Formik, Form, ErrorMessage, Field } from 'formik'

const validateFields = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = '* Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = '* Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password should be at least 6 characters'
  }
  return errors
}

export default function RegisterForm({ handleSubmit }) {
  return (
    <Formik initialValues={{ email: '', password: '' }} validate={validateFields} onSubmit={handleSubmit}>
      {({ errors, handleChange }) => (
        <Form className='flex flex-col'>
          <label className='text-sm font-semibold mb-2' htmlFor='email'>
            Email
            <Field
              className={`w-full py-1.5 px-3 text-gray-600 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
                errors.email && 'border border-pink-500'
              } `}
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              placeholder='rick@example.com'
            />
          </label>
          <ErrorMessage name='email' component='div' className=' text-red-700 text-xs mb-4' />
          <label className='text-sm font-semibold mb-2' htmlFor='password'>
            Password
            <Field
              className={`w-full py-1.5 px-3 text-gray-600 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500${
                errors.password && 'border border-pink-500'
              } `}
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
              placeholder='******'
            />
          </label>
          <ErrorMessage name='password' component='div' className='text-red-700 text-xs  mb-4' />
          <button
            type='submit'
            className='w-full text-white text-center bg-blue-500 hover:bg-blue-600 py-1.5 px-3 rounded-md mt-2'
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
}
