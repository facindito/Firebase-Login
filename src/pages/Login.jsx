import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../constants'
import ggle from '../assets/ggle.svg'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Alert from '../components/Alert'
import Modal from '../components/Modal'
import ResetPassForm from '../components/ResetPassForm'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState()

  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (!user.email) return setError('Please enter your email')
      if (!user.password) return setError('Please enter your password')
      await login(user.email, user.password)
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

  const handleClick = () => setShowModal(true)

  const handleClose = () => setShowModal(false)

  return (
    <Layout>
      <div className='w-full'>
        <h1 className='text-xl font-semibold'>Welcome back!</h1>
      </div>
      <div>
        {error && <Alert message={error} />}
        <Form handleSubmit={handleSubmit} handleChange={handleChange} textButton={'Log In'}>
          <>
            <button
              type='button'
              className='align-baseline font-semibold text-xs text-blue-400 hover:text-blue-600'
              onClick={handleClick}
            >
              Forgot Password?
            </button>
            {showModal && (
              <Modal onClose={handleClose}>
                <ResetPassForm />
              </Modal>
            )}
          </>
        </Form>
      </div>
      <div className='font-semibold'>
        <span className='text-xs text-gray-400'>Don't have account? </span>
        <Link to='/register' className='text-xs text-blue-500 hover:text-blue-600'>
          Sign up
        </Link>
      </div>
      <button
        className='w-full flex items-center justify-center gap-2 text-center border border-gray-400  hover:border-gray-600 py-1.5 px-3 rounded-md'
        onClick={handleGoogleLogin}
      >
        <img src={ggle} alt='google' className='w-5' />
        Login with Google
      </button>
    </Layout>
  )
}
