export default function Login() {
  return (
    <div>
      <form className='flex flex-col gap-4'>
        <div>
          <span className='block'>Email</span>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <span className='block'>Password</span>
          <input type='password' name='password' id='password' />
        </div>
      </form>
    </div>
  )
}
