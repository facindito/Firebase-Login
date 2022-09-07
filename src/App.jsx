import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div className='bg-slate-600 min-h-screen text-gray-800'>
      <main className='mx-auto my-0 flex justify-center items-center h-screen p-4 max-w-4xl'>
        <AuthProvider>
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </AuthProvider>
      </main>
    </div>
  )
}

export default App
