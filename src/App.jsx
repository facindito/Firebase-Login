import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div className='bg-slate-600 text-white h-screen grid justify-center items-center'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
