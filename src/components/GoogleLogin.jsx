import ggle from '../assets/ggle.svg'

export default function GoogleLogin({ handleGoogleLogin }) {
  return (
    <button
      className='w-full flex items-center justify-center gap-2 text-center border border-gray-400  hover:border-gray-600 py-1.5 px-3 rounded-md'
      onClick={handleGoogleLogin}
    >
      <img src={ggle} alt='google' className='w-5' />
      Login with Google
    </button>
  )
}
