import { useState } from 'react'
import { useAuth } from '../context/authContext'
import Alert from './Alert'

export default function ResetPassForm() {
  const [message, setMessage] = useState({
    message: null,
    errorMessage: null,
  })
  const [email, setEmail] = useState()

  const { resetPassword } = useAuth()

  const handleChange = ({ target: { value } }) => {
    setEmail(value)
  }

  const handleResetPassword = async () => {
    try {
      await resetPassword(email)
      setMessage({ message: 'We sent you an email with a link to reset your password' })
    } catch (error) {
      console.log(error.message)
      setMessage('Email is invalid')
    }
  }
  if (message.message)
    return (
      <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mt-8 text-center'>
        <span>{message.message}</span>
      </div>
    )
  return (
    <div className='flex flex-col gap-4 mt-8'>
      {message.errorMessage && <Alert message={message.errorMessage} />}
      <div>
        <label className='text-sm font-semibold mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='w-full py-1.5 px-3 text-gray-600 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          type='email'
          name='email'
          id='email'
          onChange={handleChange}
          placeholder='rick@example.com'
          required
        />
      </div>
      <div>
        <button
          className='text-white text-center bg-blue-500 hover:bg-blue-600 py-1.5 px-3 rounded-md'
          onClick={handleResetPassword}
        >
          Send
        </button>
      </div>
    </div>
  )
}
