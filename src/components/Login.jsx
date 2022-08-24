import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState()

  const { login } = useAuth()
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
      setError(error.code)
    }
  }

  return (
    <div>
      <div>{error && <p>{error}</p>}</div>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
          <label className='block' htmlFor='email'>
            Email
          </label>
          <input className='text-black p-2' type='email' name='email' id='email' onChange={handleChange} />
        </div>
        <div>
          <label className='block' htmlFor='password'>
            Password
          </label>
          <input className='text-black p-2' type='password' name='password' id='password' onChange={handleChange} />
        </div>
        <div>
          <button className='bg-slate-500 p-2'>Login</button>
        </div>
      </form>
    </div>
  )
}
