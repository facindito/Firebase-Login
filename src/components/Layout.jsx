import banner from '../assets/banner.webp'

export default function Layout({ children }) {
  return (
    <section className='flex bg-gray-200 rounded-md overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-4 p-8'>{children}</div>
      <div className='w-[24rem] hidden lg:block'>
        <img className='w-full h-full object-cover' src={banner} alt='...' />
      </div>
    </section>
  )
}
