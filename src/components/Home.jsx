import { useAuth } from '../context/authContext'

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
        <>
          <h1>Welcome {user.email}</h1>
          <button className='bg-slate-500 p-2' onClick={handleClick}>
            Logout
          </button>
        </>
      )}
    </div>
  )
}
