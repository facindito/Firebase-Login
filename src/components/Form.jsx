export default function Form({ handleSubmit, textButton, handleChange, children }) {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div>
        <label className='text-sm font-semibold mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='w-full py-1.5 px-3 text-gray-600 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          type='email'
          name='email'
          id='email'
          onChange={handleChange}
          placeholder='rick@example.com'
        />
      </div>
      <div>
        <label className='text-sm font-semibold mb-2' htmlFor='password'>
          Password
        </label>
        <input
          className='w-full py-1.5 px-3 text-gray-600 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          type='password'
          name='password'
          id='password'
          onChange={handleChange}
          placeholder='******'
        />
      </div>
      <div className='flex justify-end'>{children}</div>
      <div>
        <button
          type='submit'
          className='w-full text-white text-center bg-blue-500 hover:bg-blue-600 py-1.5 px-3 rounded-md'
        >
          {textButton}
        </button>
      </div>
    </form>
  )
}
