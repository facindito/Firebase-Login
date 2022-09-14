import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

import { ErrorMessage } from '../constants'
import Layout from '../components/Layout'
import Alert from '../components/Alert'
import GoogleLogin from '../components/GoogleLogin'
import LoginForm from '../components/LoginForm'

export default function Login() {
  const [error, setError] = useState()
  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    try {
      if (!values.email) return setError('Please enter your email')
      if (!values.password) return setError('Please enter your password')
      await login(values.email, values.password)
      navigate('/')
    } catch (error) {
      setError(ErrorMessage[error.code] || error.code)
      console.log(error)
    }
  }
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Layout>
      <div className='w-full'>
        <h1 className='text-xl font-semibold'>Welcome back!</h1>
      </div>
      <div>
        {error && <Alert message={error} />}
        <LoginForm handleSubmit={handleSubmit} />
      </div>
      <div className='font-semibold'>
        <span className='text-xs text-gray-400'>Don't have account? </span>
        <Link to='/register' className='text-xs text-blue-500 hover:text-blue-600'>
          Sign up
        </Link>
      </div>
      <GoogleLogin handleGoogleLogin={handleGoogleLogin} />
    </Layout>
  )
}
