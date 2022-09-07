import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../constants'
import ggle from '../assets/ggle.svg'
import Form from './Form'
import Layout from './Layout'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState()

  const { login, resetPassword } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch (error) {
      setError(ErrorMessage[error.code] || error.code)
    }
  }

  const handleResetPassword = async () => {
    if (!user.email) return setError('Please enter your email')
    try {
      console.log('hola')
      await resetPassword(user.email)
      setError('We sent you an email with a link to reset your password')
    } catch (error) {
      setError(error.code)
    }
  }

  return (
    <Layout>
      <div className='w-full'>
        <h1 className='text-xl font-semibold'>Welcome back!</h1>
      </div>
      <div>
        {error && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4 text-center'>
            <span>{error}</span>
          </div>
        )}
        <Form handleSubmit={handleSubmit} handleChange={handleChange} textButton={'Log In'}>
          <button
            type='button'
            className='align-baseline font-semibold text-xs text-blue-400 hover:text-blue-600'
            onClick={handleResetPassword}
          >
            Forgot Password?
          </button>
        </Form>
      </div>
      <div className='font-semibold'>
        <span className='text-xs text-gray-400'>Don't have account? </span>
        <Link to='/register' className='text-xs text-blue-500 hover:text-blue-600'>
          Sign up
        </Link>
      </div>
      <button className='w-full flex items-center justify-center gap-2 text-center border border-gray-400  hover:border-gray-600 py-1.5 px-3 rounded-md '>
        <img src={ggle} alt='google' className='w-5' />
        Login with Google
      </button>
    </Layout>
  )
}
