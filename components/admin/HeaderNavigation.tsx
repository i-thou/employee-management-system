import React from 'react'

const HeaderNavigation = () => {
  return (
    <header className='flex justify-between bg-black p-2 @3xl:p-5 w-full fixed'>
          <div>1</div>
          <div>
            <nav className='flex text-white gap-5 @3xl:hidden'>
              <a href="/dashboard" className='flex gap-2 items-center text-xl @3xl:text-2xl items-center'><img src="/dashboard.svg" alt="an svg showing a dashboard" />Dashboard</a>
              <a href="/create" className='flex gap-2 items-center text-xl @3xl:text-2xl items-center'><img src="/add.svg" alt="an svg showing a dashboard"  className='size-6'/>Create</a>
              <a href="/employees" className='flex gap-2 items-center text-xl @3xl:text-2xl items-center'><img src="/employees.svg" alt="an svg showing a dashboard" className='size-6'/>All Employees</a>
            </nav>
          </div>
    </header>
  )
}

export default HeaderNavigation