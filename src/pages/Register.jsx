import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../constants'
import Layout from '../components/Layout'
import Alert from '../components/Alert'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
  const [error, setError] = useState()

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    setError('')
    try {
      await signup(values.email, values.password)
      navigate('/')
    } catch (error) {
      setError(ErrorMessage[error.code] || 'Internal error')
    }
  }

  return (
    <Layout>
      <div className='w-full'>
        <h1 className='text-xl font-semibold'>Create your account</h1>
      </div>
      <div>
        {error && <Alert message={error} />}
        <RegisterForm handleSubmit={handleSubmit} />
      </div>
      <div className='font-semibold'>
        <span className='text-xs text-gray-400'>Do you have an account? </span>
        <Link to='/login' className='text-xs text-blue-500 hover:text-blue-600'>
          Login
        </Link>
      </div>
    </Layout>
  )
}
