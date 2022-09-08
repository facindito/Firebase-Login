import { useAuth } from '../context/authContext'
import Layout from '../components/Layout'

export default function Home() {
  const { user, logout, loading } = useAuth()

  const handleClick = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Layout>
          <h1 className='text-xl font-semibold'>Welcome {user.displayName || user.email}</h1>
          <button
            className='w-full text-white text-center bg-blue-500 hover:bg-blue-600 py-1.5 px-3 rounded-md'
            onClick={handleClick}
          >
            Logout
          </button>
        </Layout>
      )}
    </>
  )
}
