import { useState } from 'react'
import { Formik, Form } from 'formik'
import ResetPassForm from './ResetPassForm'
import Modal from './Modal'

export default function LoginForm({ handleSubmit }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      {({ handleChange }) => (
        <Form className='flex flex-col gap-4'>
          <div>
            <label className='text-sm font-semibold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full py-1.5 px-3 text-gray-600 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              type='email'
              name='email'
              onChange={handleChange}
              placeholder='rick@example.com'
            />
          </div>
          <div>
            <label className='text-sm font-semibold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='w-full py-1.5 px-3 text-gray-600 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              type='password'
              name='password'
              onChange={handleChange}
              placeholder='******'
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='button'
              className='align-baseline font-semibold text-xs text-blue-400 hover:text-blue-600'
              onClick={() => setShowModal(true)}
            >
              Forgot Password?
            </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <ResetPassForm />
              </Modal>
            )}
          </div>
          <div>
            <button
              type='submit'
              className='w-full text-white text-center bg-blue-500 hover:bg-blue-600 py-1.5 px-3 rounded-md'
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
