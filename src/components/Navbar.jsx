import React from 'react'

export default function Navbar() {
  return (
    <header className='bg-gray-500 rounded'>
      <nav className='flex justify-between items-center bg-white '>
        <div className='flex items-center space-x-10 p-5'>
          <img className='w-16 p-0 rounded-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src="/public/Adi.jpeg" alt="adii" />
          <p className='text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-1'>Adi Permana S</p>
        </div>
        <ul className='flex justify-between space-x-10 mx-3 transition ease-in-out delay-200 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-5 p-3 rounded '>
          <li><a href="#" className='hover:text-red-500'>Home</a></li>
          <li><a href="#" className='hover:text-red-500'>About</a></li>
          <li><a href="#" className='hover:text-red-500'>Contact</a></li>
        </ul>
      </nav>
      <section>
        <p>selamat data di my bio data</p>
        <h1>selamat kembali dan selama</h1>
      </section>
      {/* footere */}
      <footer>
        <p>jdsbdbsl</p>
      </footer>
    </header>
  )
}
