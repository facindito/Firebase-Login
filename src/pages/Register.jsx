import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../constants'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Alert from '../components/Alert'

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState()

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
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
        <Form handleSubmit={handleSubmit} handleChange={handleChange} textButton={'Create Account'} />
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
