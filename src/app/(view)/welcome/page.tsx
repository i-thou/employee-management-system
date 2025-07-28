import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
          <header className='flex justify-between px-2 @3xl:px-20 bg-black p-2 @3xl:p-5 w-full text-white'>
              <Image src={"/logo.svg"} alt='a svg showing the logo of the company' width={40} height={40}/>
              <p>Connect to me</p>
          </header>
          <main className='flex flex-col items-center mt-20 text-center gap-2 @3xl:gap-5'>
              <Image src={"/welcome.svg"} alt='' width={700} height={700} />
              <div className='space-y-5 @3xl:space-y-10'>
                  <p className='text-2xl @xl:text-4xl @3xl:text-6xl font-bold'>Connect Employees</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Ipsum eius praesentium atque fugiat qui placeat debitis enim nulla eaque, soluta quibusdam ut nisi saepe, itaque perspiciatis maxime nemo cupiditate sequi?</p>
                  <a href="/admin-login" className='bg-gradient-to-r from-lightPurple to-darkPurple px-10 py-5 rounded-full @3xl:px-25 text-white font-bold text-xl'>Get Started</a>
              </div>
          </main>
    </div>
  )
}

export default page