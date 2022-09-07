import { useAuth } from '../context/authContext'
import Layout from './Layout'

export default function Home() {
  const { user, logout, loading } = useAuth()

  const handleClick = async () => {
    await logout()
  }

  return (
    <div className='flex flex-col gap-4'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Layout>
          <h1 className='text-xl font-semibold'>Welcome {user.email}</h1>
          <button
            className='w-full text-white text-center bg-blue-500 hover:bg-blue-600 py-1.5 px-3 rounded-md'
            onClick={handleClick}
          >
            Logout
          </button>
        </Layout>
      )}
    </div>
  )
}
